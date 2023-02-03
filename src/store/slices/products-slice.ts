import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import products, { Product } from "../../Assets/dummyProductsData";

import { brands, sizes, colors, price } from '../../paths/names';

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
        state.filteredProducts = products;
      } else {
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

        // * old one

        let initialArr = [filteredBrands, filteredColors, filteredPrice, filteredSizes];

        let itemsWithLen = initialArr.filter((arr) => arr.length > 0);

        let numberOfAciveFilters = itemsWithLen.length;

        let allIds: Array<number> = [];

        for (let item of itemsWithLen) {
          for (let product of item) {
            allIds.push(product.id);
          }
        }

        let sortedIds = allIds.sort((a, b) => a - b);

        let isSameCounter = 0;
        let productIds: Array<number> = [];

        for (let index = 0; index < sortedIds.length; index += 1) {
          if (sortedIds[index] === sortedIds[index + 1]) {
            isSameCounter += 1;
          } else {
            isSameCounter = 0;
          }
          if (isSameCounter === numberOfAciveFilters - 1) productIds.push(sortedIds[index]);
        }

        let filteredProducts: Product[] = [];

        filteredProducts = products.filter((product) => productIds.includes(product.id));

        state.filteredProducts = filteredProducts;
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
