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

const AdminHeader = () => {
  return (
    <>

    <Navbar fluid rounded className="shadow-md bg-white">
      <NavbarBrand as={Link} to="/adminDash">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="MindScape Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-emerald-800">
          MindScape Admin
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="Admin Avatar"
              img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <Link to={"/adminProfile"}>
                        <span className="block text-sm font-medium">Profile</span>
            </Link>

            <span className="block truncate text-sm text-gray-500">
sidd@1234567            </span>
          </DropdownHeader>

          

          <DropdownDivider />

          <DropdownItem>Logout</DropdownItem>
        </Dropdown>

        <NavbarToggle />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse>
        <Link
          to="/adminDash"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          Dashboard
        </Link>

        <Link
          to="/adminUserManagement"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          User Management
        </Link>

        <Link
          to="/adminDoctorList"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          Doctor List
        </Link>

        <Link
          to="/adminDoctorAssignment"
          className="block py-2 px-3 text-gray-700 hover:text-emerald-700"
        >
          Assign Doctors
        </Link>
      </NavbarCollapse>
    </Navbar>
    </>
  )
}

export default AdminHeader