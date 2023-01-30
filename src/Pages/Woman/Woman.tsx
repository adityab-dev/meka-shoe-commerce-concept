import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { loginPath } from "../../paths/paths";
import { addToCart } from "../../store/slices/users-slice";
import { productAddedToCart } from "../../store/slices/products-slice";

function Woman() {
  const filteredProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );

  const loggedInUser = useAppSelector(
    (state) => state.users.loginStatus.loggedInUser
  );

  const dispatch = useAppDispatch();

  function addToCartHandler(item: string, username: string, id: number) {
    dispatch(addToCart({ item, username }));
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
              onClick={() =>
                addToCartHandler(product.title, loggedInUser, product.id)
              }
            >
              Add to cart
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default Woman;
