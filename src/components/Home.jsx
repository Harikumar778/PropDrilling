import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function Home({ cart, setCart }) {
  const [res, setRes] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );
    const products = await response.json();

    setRes(products);
  };
  console.log(cart);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {res.map((prod) => (
        <SingleProduct prod={prod} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Home;
