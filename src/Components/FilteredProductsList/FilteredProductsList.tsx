import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { useEffect } from "react";

import {
  onFiltersChange,
  productAddedToCart,
} from "../../store/slices/products-slice";
import {
  cartInteraction,
  CartInteractionPayload,
} from "../../store/slices/users-slice";

function FilteredProductsList() {
  const filteredProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );

  const loggedInUser = useAppSelector(
    (state) => state.users.loginStatus.loggedInUser
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onFiltersChange());
  }, [dispatch]);

  function addToCartHandler(parameters: CartInteractionPayload) {
    const { id, type } = parameters;

    dispatch(cartInteraction({ ...parameters, username: loggedInUser, type }));
    dispatch(productAddedToCart({ id, type }));
  }

  return (
    <>
      {filteredProducts.map((product) => {
        return (
          <article key={product.id} className="content-article">
            <div className="content-article-top">
              <div className="products-img-container">
                <img src={product.thumbnail} alt="thumbnail" />
              </div>
              <div className="article-content-container">
                <div>{product.title}</div>
                <div>${product.price}</div>
              </div>
            </div>
            <button
              className={`product-btn ${
                !product.quantity ? "disabled-btn" : ""
              }`}
              type="button"
              disabled={!product.quantity}
              onClick={() =>
                addToCartHandler({
                  ...product,
                  price: product.price.toString(),
                  username: loggedInUser,
                  type: "decrement",
                })
              }
            >
              Add to cart
            </button>
          </article>
        );
      })}
    </>
  );
}

export default FilteredProductsList;
