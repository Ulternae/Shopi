import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import cart from "../../assets/cart.svg"

const Navbar = () => {
  const { cartProducts } = useContext(ShoppingCartContext)
  const style = "underline underline-offset-4";
  
  return (
    <>
      <div className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light h-14 bg-white shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <NavLink className="font-semibold text-lg" to={"/"}>
            Shopi
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            All
          </NavLink>
          <NavLink
            to={"/shoes"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            Shoes
          </NavLink>
          <NavLink
            to={"/electronics"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            Electronics
          </NavLink>
          <NavLink
            to={"/furnitures"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            Furnitures
          </NavLink>
          <NavLink
            to={"/toys"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            Toys
          </NavLink>
          <NavLink
            to={"/others"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            Others
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-black/60">Ulternae</p>
          <NavLink
            to={"/my_orders"}
            className={({ isActive }) => (isActive ? style : "")}
          >
            My Orders
          </NavLink>
          <div className="flex items-center">
            <img className="w-6 h-6" src={cart} alt="" />
            <p>{cartProducts.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
