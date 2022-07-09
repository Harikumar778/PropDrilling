import { useNavigate } from "react-router-dom";
function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  return (
    <div>
      {cart.map((ele) => (
        <div>
          <img src={ele.imageURL} alt="" height="100px" width="100px" />
          <span>{ele.name}</span>
          <span>{ele.price}</span>
          <button onClick={() => setCart(cart.filter((c) => c.id !== ele.id))}>
            Remove from Cart
          </button>
        </div>
      ))}

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </div>
  );
}

export default Cart;
