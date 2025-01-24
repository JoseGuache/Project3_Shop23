// // 

// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Nav() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           {/* Categories */}
//           <li className="mx-1">
//             <Link to="/category/men">Men</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/category/women">Women</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/category/kids">Kids</Link>
//           </li>

//           {/* Authenticated user options */}
//           <li className="mx-1">
//             <Link to="/orderHistory">Order History</Link>
//           </li>
//           <li className="mx-1">
//             <a href="/" onClick={() => Auth.logout()}>Logout</a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           {/* Categories */}
//           <li className="mx-1">
//             <Link to="/category/men">Men</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/category/women">Women</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/category/kids">Kids</Link>
//           </li>

//           {/* Guest options */}
//           <li className="mx-1">
//             <Link to="/signup">Signup</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="shopping bag">🛍️</span>
//           -Shop-Shop
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }

// export default Nav;

import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hidden bar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function showNavigation() {
    return (
      <ul className={`flex-col ${isMenuOpen ? "block" : "hidden"} md:flex md:flex-row`}>
        {/* Categories */}
        <li className="mx-1">
          <Link to="/category/men">Men</Link>
        </li>
        <li className="mx-1">
          <Link to="/category/women">Women</Link>
        </li>
        <li className="mx-1">
          <Link to="/category/kids">Kids</Link>
        </li>

        {/* Dropdown example */}
        <li className="mx-1">
          <DropdownButton id="dropdown-item-button" title="More Options">
            <Dropdown.ItemText>Dropdown item </Dropdown.ItemText>
            <Dropdown.Item as="button">Men</Dropdown.Item>
            <Dropdown.Item as="button">Woman</Dropdown.Item>
            <Dropdown.Item as="button">Kids</Dropdown.Item>
          </DropdownButton>
        </li>

        {/* Authenticated or Guest options */}
        {Auth.loggedIn() ? (
          <>
            <li className="mx-1">
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>Logout</a>
            </li>
          </>
        ) : (
          <>
            <li className="mx-1">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    );
  }

  return (
    <header className="flex flex-col md:flex-row px-1">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1>
          <Link to="/">
            <span role="img" aria-label="shopping bag">🛍️</span>
            -Shop-Shop
          </Link>
        </h1>

        {/* Hamburger menu button */}
        <button 
          className="md:hidden text-xl px-3 py-2" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation menu */}
      <nav className="mt-4 md:mt-0 md:ml-auto">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
