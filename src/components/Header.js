import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnname, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStaus();

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnname === "Login" ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnname}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header