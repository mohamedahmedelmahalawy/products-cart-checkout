import { useEffect, useState } from "react";
import Product from "../product/Product";

function Products({ addToCart }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-2/3">
        {loading && <h2>Loading Products...</h2>}
        {error && <h2>{error}</h2>}
        <div className="flex flex-wrap gap-4">
          {data?.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
