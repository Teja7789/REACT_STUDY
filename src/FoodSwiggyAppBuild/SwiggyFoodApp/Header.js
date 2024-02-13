import { useState } from "react";
import { HEADER_LOGO } from "../../utils/Constants";

const Header = () => {
  const [toogleLoginBtn, setToogleLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="headerBtn"
            onClick={() =>
              toogleLoginBtn === "Login"
                ? setToogleLoginBtn("LogOut")
                : setToogleLoginBtn("Login")
            }
          >
            {toogleLoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
