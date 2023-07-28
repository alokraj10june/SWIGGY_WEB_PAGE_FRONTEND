import { useState } from "react";
import { Link } from "react-router-dom";
const Title=()=>(
    <a href="#">
    <img className="logo" src="https://storage.googleapis.com/shy-pub/35475/1621325746936_36869_logo.jpg" alt='res'/>
    </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      

        <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
        </div>
        {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
        </div>
  );
};

export default Header;