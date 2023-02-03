import "./ProductsContent.css";
import FilteredProductsList from "../FilteredProductsList/FilteredProductsList";

function ProductsContent(props: { image: string }) {
  const imageSource = props.image;

  const image = <img src={imageSource} alt="arrivalShoesImage" />;

  return (
    <div className="content-container">
      <div className="products-big-img-container">{image}</div>
      <div
        style={{
          marginTop: "1.25rem",
          fontSize: "1.5rem",
          color: "#FF0000",
          fontWeight: "bold",
        }}
      >
        New Arrival
      </div>
      <div className="products-list-container">
        <FilteredProductsList />
      </div>
    </div>
  );
}

export default ProductsContent;
