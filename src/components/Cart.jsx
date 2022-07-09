function Cart({ cart, setCart }) {
  return (
    <div>
      {cart.map((ele) => (
        <div>
          <img src={ele.imageURL} alt="" height="100px" width="100px" />
          <span>{ele.name}</span>
          <span>{ele.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Cart;
