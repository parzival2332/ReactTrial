import { CgGym } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ path, name }) => {
  return (
    <p className="px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out">
      <NavLink to={path}>{name}</NavLink>
    </p>
  );
};

function Navbar() {
  return (
    <div className="p-4 text-gray-100 bg-gray-800 sticky flex flex-row gap-12 justify-between items-center shadow-md">
      <CgGym />
      <div className="flex flex-row gap-28 ">
        <NavbarItem path="/About" name="About" />
        <NavbarItem path="/Plans" name="Plans" />
        <NavbarItem path="/Shop" name="Shop" />
        <NavbarItem path="/Contact" name="Contact" />
      </div>
      <div className="flex flex-row gap-10">
        <BsSearch />
        <PiShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
