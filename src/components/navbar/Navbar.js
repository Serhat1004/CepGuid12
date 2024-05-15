import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery(""); // Clear the input after search
  };

  return (
    <div className="navbar">
      <Link to="/Home" className="logo">
        <h2 style={{ fontSize: '24px' }}>
          <span style={{ fontSize: '34px' }}>C</span>ep
          <span style={{ fontSize: '34px' }}>G</span>uide
        </h2>
      </Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">🔍</button>
      </form>
      <ul className="nav-links">
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/Excursions">
          <li>Excursions</li>
        </Link>
        <Link to="/AboutUs">
          <li>About Us</li>
        </Link>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <Link to="/Login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
