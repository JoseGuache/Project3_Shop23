import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownItemTagsExample({ isLoggedIn }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <> 
      {/* Menu 23 dropdown - commented out
      <div className="d-flex justify-content-between mt-5"> 
        <div className=" d-flex justify-content-start">
          <DropdownButton 
            id="dropdown-item-button"
            title="Menu 23"
            show={isDropdownOpen}
            onClick={handleToggle}
            className="mainBtn"
          >
            <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/" onClick={handleItemClick}>
              Men
            </Dropdown.Item>
            {isLoggedIn ? (
              <>
                <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/orderHistory" onClick={handleItemClick}>
                  Order History
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item-spacing" as="button" onClick={() => { Auth.logout(); handleItemClick(); }}>
                  Logout
                </Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/signup" onClick={handleItemClick}>
                  Woman
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/login" onClick={handleItemClick}>
                  Kids
                </Dropdown.Item>
              </>
            )}
          </DropdownButton> 
        </div>   
      </div>
      */}

      <div className="d-flex justify-content-start">
      <DropdownButton 
        id="dropdown-item-button"
        
        title="Menu"
        show={isDropdownOpen}
        onClick={handleToggle}
        className="mainBtn"
      >
        <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/" onClick={handleItemClick}>
          Home
        </Dropdown.Item>
        {isLoggedIn ? (
          <>
            <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/orderHistory" onClick={handleItemClick}>
              Order History
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item-spacing" as="button" onClick={() => { Auth.logout(); handleItemClick(); }}>
              Logout
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/signup" onClick={handleItemClick}>
              Signup
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item-spacing" as={Link} to="/login" onClick={handleItemClick}>
              Login
            </Dropdown.Item>
          </>
        )}
      </DropdownButton> </div>
    </>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-1">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-primary my-auto w-full text-center">
          <Link to="/" className="text-decoration-none">
            <span role="img" aria-label="shopping bag">👟</span>
            Shop 23
            <span role="img" aria-label="shopping bag">👟</span>
          </Link>
        </h1>
      </div>

      <nav className="mt-4 md:mt-0 flex justify-center w-full md:w-auto">
        <DropdownItemTagsExample isLoggedIn={Auth.loggedIn()} />
      </nav>
    </header>
  );
}

export default Nav;

