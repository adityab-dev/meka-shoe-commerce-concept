import { useAppSelector } from "../../store/hooks/hooks";

function Arrival() {
    const products = useAppSelector((state) => state.products);
    const filters = useAppSelector((state) => state.appliedFilters);

    const filteredProducts = products.filter((product) => {});

    return (
        <div>
            {products.map((product) => {
                return (
                    <section key={product.id}>
                        <div>{product.brand}</div>
                        <div>{product.title}</div>
                        <img src={product.thumbnail} alt="thumbnail" />
                        <div>{product.price}</div>
                    </section>
                );
            })}
        </div>
    );
}

export default Arrival;
