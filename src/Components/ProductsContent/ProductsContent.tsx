import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { addToCart } from "../../store/slices/users-slice";
import { onFiltersChange, productAddedToCart } from "../../store/slices/products-slice";

import "./ProductsContent.css";

function ProductsContent() {
  const filteredProducts = useAppSelector((state) => state.products.filteredProducts);

  const loggedInUser = useAppSelector((state) => state.users.loginStatus.loggedInUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onFiltersChange());
  }, [dispatch]);

  function addToCartHandler(
    username: string,
    id: number,
    title: string,
    price: string,
    brand: string,
    colors: Array<string>,
    sizes: Array<number>,
    thumbnail: string,
    quantity: number,
    type: string
  ) {
    const product = { id, title, price, brand, sizes, colors, thumbnail, quantity };

    dispatch(addToCart({ ...product, username }));
    dispatch(productAddedToCart({ id, type }));
  }

  return (
    <div className="content-container">
      {filteredProducts.map((product) => {
        return (
          <article key={product.id}>
            {/* <div>{product.brand}</div> */}
            <div className="products-img-container">
              <img src={product.thumbnail} alt="thumbnail" />
            </div>
            <div>{product.title}</div>
            <div>${product.price}</div>
            {/* {!product.quantity ? <p className="products-warning">no item left to add</p> : null} */}
            <button
            className="product-btn"
              type="button"
              disabled={!product.quantity}
              onClick={() =>
                addToCartHandler(
                  loggedInUser,
                  product.id,
                  product.title,
                  product.price.toString(),
                  product.brand,
                  product.colors,
                  product.sizes,
                  product.thumbnail,
                  product.quantity,
                  "decrement"
                )
              }
            >
              Add to cart
            </button>
            <div>{product.quantity} left</div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsContent;
