import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { Product } from "../../Assets/dummyProductsData";
import { addToCart } from "../../store/slices/users-slice";
import { productAddedToCart } from "../../store/slices/products-slice";

function Arrival() {
    const products = useAppSelector((state) => state.products);
    const filters = useAppSelector((state) => state.appliedFilters);
    const loggedInUser = useAppSelector((state) => state.users.loginStatus.loggedInUser);

    const dispatch = useAppDispatch();

    // price is string coonverted to number for comparisson in if statement.
    const filterPriceString = filters.price;
    const filterPriceNumber = +filterPriceString;

    //
    //
    //

    let arr1 = ["red", "blue", "green"];
    let arr2 = ["red", "green"];

    function isSubset<T>(array1: Array<T>, array2: Array<T>): boolean {
        for (let color of array2) {
            if (!array1.includes(color)) return false;
        }
        return true;
    }

    let a = isSubset(arr1, arr2);
    console.log("a", a);
    //
    //
    //
    //

    const filteredBrand = products.filter((product) => {
        if (product.brand.toLowerCase().includes(filters.brand.trim().toLowerCase())) {
            return product;
        }
    });
    // console.log("filteredBrand", filteredBrand);

    const filteredPrice = products.filter((product) => {
        if (filterPriceNumber === 0) {
            return product;
        }
        if (product.price <= filterPriceNumber) {
            return product;
        }
    });

    // console.log("filteredPrice", filteredPrice);

    const filteredColor = products.filter((product) => {
        if (product.colors.includes(filters.color.toLowerCase())) return product;
    });
    // console.log("filteredColor", filteredColor);

    const filteredSize = products.filter((product) => {
        const size = +filters.size;
        if (product.sizes.includes(size)) return product;
    });
    // console.log("filteredSize", filteredSize);

    let commonElements_Price_Brand: Product[] = [];
    let commonElements_Price_Brand_Color: Product[] = [];
    let commonElements_Price_Brand_Color_Size: Product[] = [];

    // elements which are common in all filters will be filtered Products that are to be rendered.
    // since only 1 filter is required to reduce final array. therefore if there is
    // no filter we need to push all elements of previous array into current array.
    // because if there are no filters all elements will be renedered and as soon as one/more filters
    // are applied. last step will reduce the array.

    filteredBrand.forEach((productBrand) => {
        filteredPrice.forEach((productPrice) => {
            if (productBrand.id === productPrice.id) {
                commonElements_Price_Brand.push(productPrice);
            }
        });
    });
    if (commonElements_Price_Brand.length === 0) {
        commonElements_Price_Brand = [...products];
    }
    // console.log("commonElements_Price_Brand", commonElements_Price_Brand);

    commonElements_Price_Brand.forEach((product_price_brand) => {
        if (product_price_brand.colors.includes(filters.color.toLowerCase())) {
            commonElements_Price_Brand_Color.push(product_price_brand);
        }
    });
    if (commonElements_Price_Brand_Color.length === 0) {
        commonElements_Price_Brand_Color = [...commonElements_Price_Brand];
    }
    // console.log("commonElements_Price_Brand_Color", commonElements_Price_Brand_Color);

    commonElements_Price_Brand_Color.forEach((product_price_brand_color) => {
        filteredSize.forEach((product) => {
            if (product.id === product_price_brand_color.id) {
                // if ids are same product is same product || product_price_brand_color
                commonElements_Price_Brand_Color_Size.push(product);
            }
        });
    });
    if (commonElements_Price_Brand_Color_Size.length === 0) {
        commonElements_Price_Brand_Color_Size = [...commonElements_Price_Brand_Color];
    }
    // console.log("commonElements_Price_Brand_Color_Size", commonElements_Price_Brand_Color_Size);

    const filteredProducts = commonElements_Price_Brand_Color_Size;

    function addToCartHandler(title: string, loggedInUser: string, id: number) {
        dispatch(addToCart({ item: title, username: loggedInUser }));
        dispatch(productAddedToCart(id));
    }

    return (
        <div>
            {filteredProducts.map((product) => {
                return (
                    <article key={product.id}>
                        <div>{product.brand}</div>
                        <div>{product.title}</div>
                        <img src={product.thumbnail} alt="thumbnail" />
                        <div>{product.price}</div>
                        {!product.quantity ? <p>no item left to add</p> : null}
                        <div>{product.quantity} left</div>
                        <button
                            type="button"
                            disabled={!product.quantity}
                            onClick={() => addToCartHandler(product.title, loggedInUser, product.id)}
                        >
                            Add to cart
                        </button>
                    </article>
                );
            })}
        </div>
    );
}

export default Arrival;
