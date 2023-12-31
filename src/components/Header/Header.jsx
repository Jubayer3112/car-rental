import { Link, NavLink } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#ff5030]">
        <div className="max-w-5xl mx-auto ml-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 text-white">
              {!user ? (
                <div className="flex gap-3">
                  <Link to={"/login"}>Login</Link>
                  <Link to={"/register"}>Register</Link>
                </div>
              ) : (
                <Link onClick={handleLogOut}>Logout</Link>
              )}
            </div>
            <div className="avatar flex items-center gap-3 py-2 text-white">
              <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user ? (
                  <img src={user?.photoURL} />
                ) : (
                  <img src="https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg" />
                )}
              </div>
              <h1>{user?.displayName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="navbar lg:max-w-5xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="w-40">
              <img
                src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/logo_v4.png"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-end hidden ">
            {
              <ul className="menu menu-horizontal md:hidden px-1">
                {menuItems}
              </ul>
            }
          </div>
          <div className="navbar-end">
            {
              <ul className="menu menu-horizontal hidden md:block px-1">
                {menuItems}
              </ul>
            }
            {user && (
              <div className="flex gap-3">
                <Link to={"/addproduct"}>
                  <button className="bg-[#ff5030] text-white flex items-center gap-2 py-2 px-4 rounded mx-3">
                    <BsFillPlusCircleFill />
                    <span className="hidden md:block">Add Product</span>
                  </button>
                </Link>
                <Link to={"/shoppingcart"}>
                  <button className="bg-[#ff5030] text-white flex items-center gap-2 py-2 px-4 rounded ">
                    <FaCartArrowDown />
                    <span className="hidden md:block">My Cart</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
