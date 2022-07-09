import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <h1>TEErex</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
