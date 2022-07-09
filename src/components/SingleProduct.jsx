function SingleProduct({ prod, cart, setCart }) {
  return (
    <>
      <div>
        <img src={prod.imageURL} alt="" height="120px" width="120px" />
        <div>
          <span>{prod.name}</span>
          <span>${prod.price}</span>
        </div>

        {cart.includes(prod) ? (
          <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>
            Remove to Cart
          </button>
        ) : (
          <button onClick={() => setCart([...cart, prod])}>Add to Cart</button>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
