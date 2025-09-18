import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import LogoutButton from "../../LogoutButton";
import {
  BiListPlus,
  BiListUl,
  BiSolidDiscount,
  BiSolidCategoryAlt,
} from "react-icons/bi";
import { MdCampaign } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../logo.svg"; // change to "../../logo.png" if that's your asset

function Navbar() {
  const { isLoggedIn, user, isAdmin } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/logo.png" alt="Restauranty" width="250" />
      </Link>

      {user ? <h3>Welcome {user.name} {user.surname}</h3> : <h3>Welcome</h3>}

      <div className="buttons-main">
        {isLoggedIn ? (
          <>
            {isAdmin && (
              <>
                <Link to="/items">
                  <button className="button-menu"><BiListUl className="icons" /> Items</button>
                </Link>
                <Link to="/createitem">
                  <button className="button-menu"><BiListPlus className="icons" /> Create Item</button>
                </Link>
                <Link to="/discounts/coupons">
                  <button className="button-menu"><BiSolidDiscount className="icons" /> Coupons</button>
                </Link>
                <Link to="/createcoupon">
                  <button className="button-menu"><BiListPlus className="icons" /> Create Coupon</button>
                </Link>
                <Link to="/discounts/campaigns">
                  <button className="button-menu"><MdCampaign className="icons" /> Campaigns</button>
                </Link>
                <Link to="/createcampaign">
                  <button className="button-menu"><BiListPlus className="icons" /> Create Campaigns</button>
                </Link>
                <Link to="/dietary">
                  <button className="button-menu"><BiSolidCategoryAlt className="icons" /> Categories</button>
                </Link>
                <Link to="/createdietary">
                  <button className="button-menu"><BiListPlus className="icons" /> Create Categories</button>
                </Link>
              </>
            )}

            <Link to="/profile">
              <button className="button-menu"><BsFillPersonFill className="icons" /> Profile</button>
            </Link>

            <LogoutButton className="button-menu" />
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="button-menu">Login</button>
            </Link>
            <Link to="/signup">
              <button className="button-menu">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
