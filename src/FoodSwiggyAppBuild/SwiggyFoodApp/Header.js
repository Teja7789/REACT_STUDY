import { useState } from "react";
import { HEADER_LOGO } from "../../utils/Constants";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [toogleLoginBtn, setToogleLoginBtn] = useState("Login");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 w-[500px]" >
          <li> <Link  to="/">Home</Link></li>
          <li><Link  to="/courosel">About Us </Link></li>
          <li><Link  to="/courosel">Contact Us</Link></li>
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
