import { useState } from "react";
import { HEADER_LOGO } from "../../utils/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  {increment, incrementByAmount,clearCart}  from "../ReduxToolkit/cartSlice";


const Header = () => {
  const [toogleLoginBtn, setToogleLoginBtn] = useState("Login");
  const navigate = useNavigate();
  const {value, amount} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log(value, amount,"cart");

  // const handleItem = (item) => {
  //   dispatch(addItem("pizza"));
  // }
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 w-[500px]" >
          <li> <Link  to="/">Home</Link></li>
          <li><Link  to="/courosel">About Us </Link></li>
          <li onClick={() => dispatch(increment("pizza"))}>Cart{value} 
         
          </li>
          <li> <h1 onClick={() => dispatch(clearCart())}>clearCart</h1></li>
          <li onClick={() => dispatch(incrementByAmount(30))}>Amount{amount}</li>
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


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// // import { decrement, increment } from './counterSlice'

// export function Header() {
//   const count = useSelector((state) => state.cart)
//   console.log(count,"count");

//   return (
//     <div>
//       Cart
//     </div>
//   )
// }
// export default Header;
