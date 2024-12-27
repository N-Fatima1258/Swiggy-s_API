import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //const data = useContext(UserContext);
  //console.log(data)
  //you can have as many contexts as you want. Whatever context you want to use, pass in to userContext. Now you can extract loggedInUSer from this data variable. Destructure it on to fly
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center p-3 shadow-md bg-green-50">
      <div>
        <img className="w-20" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-gray-800 font-medium">
          <li className="flex items-center">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-700 transition-colors duration-300"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Cart - ({cartItems.length})
            </Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
        <button
          className="ml-4 px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          onClick={() => {
            reactBtn === "Login" ? setReactBtn("Logout") : setReactBtn("Login");
          }}
        >
          {reactBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
