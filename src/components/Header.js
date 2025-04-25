import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnname, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStaus();

  return (
    <div className="flex justify-between shadow-md">
      <div>
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"> <Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={() => {
            btnname === "Login" ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnname}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header