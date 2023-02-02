import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { addToCart } from "../../store/slices/users-slice";
import { onFiltersChange, productAddedToCart } from "../../store/slices/products-slice";

import "./ProductsContent.css";

function ProductsContent(props: { image: string }) {
  const filteredProducts = useAppSelector((state) => state.products.filteredProducts);

  const loggedInUser = useAppSelector((state) => state.users.loginStatus.loggedInUser);

  const dispatch = useAppDispatch();

  const imageSource = props.image;

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

  const image = <img src={imageSource} alt="arrivalShoesImage" />;

  const productsList = filteredProducts.map((product) => {
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
          className={`product-btn ${!product.quantity ? 'disabled-btn' : ''}`}
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
      </article>
    );
  });

  return (
    <div className="content-container">
      <div className="products-big-img-container">{image}</div>
      <div style={{ marginTop: "1.25rem", fontSize: "1.5rem", color: "#FF0000", fontWeight: "bold" }}>
        New Arrival
      </div>
      <div className="products-list-container">{productsList}</div>
    </div>
  );
}

export default ProductsContent;
