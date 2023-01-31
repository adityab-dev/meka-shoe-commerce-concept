import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import products, { Product } from "../../Assets/dummyProductsData";

import { brands, sizes, colors, price } from "../../Components/Sidebar/Sidebar";

type AppliedFilters = {
  brands: Array<string>;
  colors: Array<string>;
  sizes: Array<string>;
  price: string;
};

const initialFilters: AppliedFilters = {
  brands: [],
  sizes: [],
  colors: [],
  price: "0",
};

type InitialProductState = {
  products: Product[];
  appliedFilters: AppliedFilters;
  filteredProducts: Product[];
};

const initialProductsState: InitialProductState = {
  products: products,
  appliedFilters: initialFilters,
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    productAddedToCart(state, action: PayloadAction<{ id: number; type: string }>) {
      const { id: idOfProduct, type } = action.payload;

      let indexOfProduct = 0;

      indexOfProduct = state.products.findIndex((product) => product.id === idOfProduct);

      if (!(state.products[indexOfProduct].quantity === 0) && type === "decrement") {
        state.products[indexOfProduct].quantity -= 1;
      }
      if (type === "increment" && state.products[indexOfProduct].quantity < 5) {
        state.products[indexOfProduct].quantity += 1;
      }

      const filteredProducts = state.filteredProducts;

      indexOfProduct = filteredProducts.findIndex((product) => product.id === idOfProduct);

      if (!(state.filteredProducts[indexOfProduct].quantity === 0) && type === "decrement") {
        state.filteredProducts[indexOfProduct].quantity -= 1;
      }

      if (state.filteredProducts[indexOfProduct].quantity < 5 && type === "increment") {
        state.filteredProducts[indexOfProduct].quantity += 1;
      }
    },

    enterDataOnFilterField(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;

      const isValidStateKey = name === brands || name === colors || name === sizes;

      const appliedFilters = state.appliedFilters;

      if (isValidStateKey) {
        if (!appliedFilters[name].length) {
          appliedFilters[name].splice(0, 0, value.trim());
        }

        if (appliedFilters[name].length) {
          appliedFilters[name][appliedFilters[name].length - 1] = value;
        }
      }

      if (name === price) appliedFilters.price = value;
    },

    checkboxInteraction(
      state,
      action: PayloadAction<{ name: string; value: string; checked: boolean }>
    ) {
      // ! NOTE: if filter isn't matched then still all products are returned instead of none.
      // ? because if empty array we are returning every product on brands_colors
      const { name, value, checked } = action.payload;

      const isValidStateKey = name === brands || name === colors || name === sizes;

      if (isValidStateKey && checked) {
        state.appliedFilters[name].splice(0, 0, value as never);
      }

      if (isValidStateKey && !checked) {
        let indexOfItem: number;
        indexOfItem = state.appliedFilters[name].findIndex((el) => el === value);
        state.appliedFilters[name].splice(indexOfItem, 1);
      }
    },

    onFiltersChange(state) {
      const products = state.products;
      const { brands, colors, sizes, price } = state.appliedFilters;

      if (brands.length === 0 && colors.length === 0 && sizes.length === 0 && price === "0") {
        console.log("inside if");
        state.filteredProducts = products;
      } else {
        console.log("inside else");

        // * removes "" from list.

        let uniqueBrands = [...brands];
        let len = uniqueBrands.length;
        if (uniqueBrands[len - 1] === "") uniqueBrands.pop();

        let uniqueSizes = [...sizes];
        len = uniqueSizes.length;
        if (uniqueSizes[len - 1] === "") uniqueSizes.pop();

        let uniqueColors = [...colors];
        len = uniqueColors.length;
        if (uniqueColors[len - 1] === "") uniqueColors.pop();

        // * from filters we make arr.
        // * for every filter and elements common in all is what we require.

        const filteredBrands = products.filter((product) => {
          for (let brand of uniqueBrands) {
            if (product.brand.toLowerCase().includes(brand.toLowerCase())) {
              return product;
            }
          }
          return null;
        });

        const filteredColors = products.filter((product) => {
          for (let color of uniqueColors) {
            for (let productColor of product.colors) {
              if (productColor.toLowerCase().includes(color.toLowerCase())) return product;
            }
          }
          return null;
        });

        const filteredSizes = products.filter((product) => {
          for (let size of uniqueSizes) {
            for (let productSize of product.sizes) {
              if (productSize.toString() === size.toString()) return product;
            }
          }
          return null;
        });

        const filteredPrice = products.filter((product) => {
          if (+price >= product.price) return product;
          return null;
        });

        // * comparing common elements b/w 4 arrays.

        //  * comparing brands with colors
        let filter_brands_colors: Product[] = [];

        if (!filteredBrands.length && !filteredColors.length) filter_brands_colors = products;
        else if (filteredColors.length && !filteredBrands.length)
          filter_brands_colors = filteredColors;
        else if (filteredBrands.length && !filteredColors.length)
          filter_brands_colors = filteredBrands;
        else if (filteredBrands.length && filteredColors.length) {
          for (let productByBrand of filteredBrands) {
            for (let productByColors of filteredColors) {
              if (productByBrand.id === productByColors.id)
                // * if ids are same, products are same returning any will work.
                filter_brands_colors.push(productByBrand);
            }
          }
        }

        //  * comparing brand & colors with sizes
        let filter_brands_colors_sizes: Product[] = [];

        if (!filteredSizes.length) filter_brands_colors_sizes = filter_brands_colors;
        else if (filteredSizes.length) {
          for (let product of filter_brands_colors) {
            for (let productBySize of filteredSizes) {
              if (productBySize.id === product.id)
                // * if ids are same, products are same returning any will work.
                filter_brands_colors_sizes.push(productBySize);
            }
          }
        }

        let filter_brands_colors_sizes_price: Product[] = [];

        if (price === "0") filter_brands_colors_sizes_price = filter_brands_colors_sizes;
        else {
          console.log("inside price else");
          for (let product of filter_brands_colors_sizes) {
            for (let productByPrice of filteredPrice) {
              // * if ids are same, products are same returning any will work.
              if (product.id === productByPrice.id)
                filter_brands_colors_sizes_price.push(productByPrice);
            }
          }
        }

        // state.filteredProducts = filter_brands_colors_sizes_price;
        state.filteredProducts = filter_brands_colors_sizes_price;
      }
    },
    resetFilters(state) {
      state.appliedFilters = initialFilters;
      state.filteredProducts = [];
    },
  },
});

export const {
  productAddedToCart,
  checkboxInteraction,
  enterDataOnFilterField,
  onFiltersChange,
  resetFilters,
} = productsSlice.actions;

export default productsSlice;
