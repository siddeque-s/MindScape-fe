import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import logo from "../assets/logoNew.png";

const UserHeader = () => {
  return (
    <Navbar fluid rounded className="shadow-md">
      {/* Logo */}
      <NavbarBrand as={Link} to="/dashboard">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="MindScape Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-emerald-800">
          MindScape
        </span>
      </NavbarBrand>

      {/* Right Side - Avatar Dropdown */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          {/* <DropdownHeader>
            <span className="block text-sm font-medium">Siddeque</span>
            <span className="block truncate text-sm text-gray-500">
              siddeque@example.com
            </span>
          </DropdownHeader> */}

          <DropdownItem as={Link} to="/userProfile">
            Profile
          </DropdownItem>

          <DropdownDivider />

          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>

        <NavbarToggle />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse>
        <Link to="/dashboard" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Dashboard
        </Link>

        <Link to="/journal" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Journal
        </Link>

        <Link to="/habits" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Habits
        </Link>

        <Link to="/moodTracker" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Mood Tracker
        </Link>

        <Link to="/insights" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Insights
        </Link>

        <Link to="/doctor" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Doctor
        </Link>

        <Link to="/userProfile" className="block py-2 px-3 text-gray-700 hover:text-emerald-700">
          Profile
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default UserHeader;
