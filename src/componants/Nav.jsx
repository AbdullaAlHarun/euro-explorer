import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Nav = () => {
  const { logout, user } = useAuth();

console.log(user)
  return (
    <div className="navbar bg-[#a90f33] shadow-lg fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/AllTouristSpot"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              All Tourist Spot
            </NavLink>

            <NavLink
              to="/AddTouristSpot"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Add Tourist spot
            </NavLink>

            <NavLink
              to="/MyList"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              My List
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost gap-0 font-bold normal-case text-xl text-info"
        >
          Euro<span className="text-[#fff]">Explorer</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#fff] font-bold btn btn-sm btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/AllTouristSpot"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            All Tourist Spot
          </NavLink>

          <NavLink
            to="/AddTouristSpot"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Add Tourist Spot
          </NavLink>

          <NavLink
            to="/MyList"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            My List
          </NavLink>
        </ul>
      </div>
   

<div className="navbar-end">
  {/* Conditional Rendering based on user authentication */}
  {!user?.email ? (
    // If user is not logged in, display register and login buttons
    <div>
      <Link to="/Register">
        <button className="btn btn-success btn-sm mr-4 text-white">
          Register
        </button>
      </Link>
      <Link to="/Login">
        <button className="btn btn-success btn-sm mr-4 text-white">
          Log In
        </button>
      </Link>
    </div>
  ) : (
    // If user is logged in, display user profile and logout button
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src="https://lh3.googleusercontent.com/a/ACg8ocI5ix9vJQCCN9P7LgV1Iw2GCvPrFng9FliU7CkDqbXvwwSK79TG=s396-c-no" alt="user avatar" />

        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button className="btn btn-sm btn-ghost text-black">
              Mehedi
          </button>
        </li>
        <li>
          <button onClick={logout} className="btn btn-sm ">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )}
</div>

    </div>
  );
};

export default Nav;
