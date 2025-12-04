


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

const DoctorHeader = () => {
  return (
    <Navbar fluid rounded className="shadow-md bg-white">
     
      <NavbarBrand as={Link} to="/doctorDashboard">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="MindScape Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-emerald-800">
          MindScape Doctor
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="Doctor Profile"
              img="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <Link to={"/doctorProfile"}>
                        <span className="block text-sm font-medium">Profile</span>

            </Link>
            <span className="block truncate text-sm text-gray-500">
              Sidde@123345
            </span>
          </DropdownHeader>

          <DropdownItem as={Link} to="/doctorProfile">
            Profile
          </DropdownItem>

          <DropdownDivider />

          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Link
          to="/doctorDashboard"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          Dashboard
        </Link>

        <Link
          to="/assignedPatients"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          Assigned Patients
        </Link>

       

        

        
      </NavbarCollapse>
    </Navbar>
  );
};

export default DoctorHeader;
