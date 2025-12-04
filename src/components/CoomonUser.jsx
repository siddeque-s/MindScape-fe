import React from 'react'
import logo from "../assets/logoNew.png";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from 'react-router-dom';

const CoomonUser = () => {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="#">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="MindScape Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MindScape
          </span>
        </NavbarBrand>

       <div className="flex md:order-2 gap-3">
        

        <Link to={"/login"}>
        <button
   
    className="px-4 py-2 bg-emerald-700 text-white rounded-lg shadow 
               hover:bg-emerald-800 transition font-medium"
  >
    Login
  </button>
        </Link>
  

  <NavbarToggle />
</div>

        <NavbarCollapse>

        
          <NavbarLink href="#home">
            Home
          </NavbarLink>

        
          <NavbarLink href="#stress">
            Stress
          </NavbarLink>

          
          <NavbarLink href="#about">
            About
          </NavbarLink>

          
          <NavbarLink href="#features">
            Features
          </NavbarLink>


          <NavbarLink href="#testimonials">
            Testimonials
          </NavbarLink>

          
          <NavbarLink href="#contact">
            Contact
          </NavbarLink>

        </NavbarCollapse>
      </Navbar>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default CoomonUser;
