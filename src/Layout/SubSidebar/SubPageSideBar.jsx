import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import DashboardIcon from "../../assets/Icon/Control Panel.png"
import EnrollmentReqiestIcon from "../../assets/Icon/Invite.svg"
import PatientManagementIcon from "../../assets/Icon/Management.svg"
import VaccineManagementIcon from "../../assets/Icon/Vaccine Management.svg"
import SiteManagementIcon from "../../assets/Icon/Product Management.svg"
import UserManagementIcon from "../../assets/Icon/Businessman.svg"
import AccessManagementIcon from "../../assets/Icon/Conference.svg"
import ReferenceDataIcon from "../../assets/Icon/Admin Settings Male.svg"
import VaccineForecastingIcon from "../../assets/Icon/Vaccine Management.svg"
import ReportsIcon from "../../assets/Icon/Graph Report.svg"

export default function SubPageSideBar() {

  const navlinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: DashboardIcon,
    },
    {
      name: "User",
      link: "/users",
      icon: EnrollmentReqiestIcon,
    },
    {
      name: "Patient Management",
      link: "/patient-management",
      icon: PatientManagementIcon
    },
    {
      name: "Vaccine Management",
      link: "/vaccine-management",
      icon: VaccineManagementIcon
    },
    {
      name: "Site Management",
      link: "/site-management",
      icon: SiteManagementIcon
    },
    {
      name: "User Management",
      link: "/user-management",
      icon: UserManagementIcon
    },
    {
      name: "Access Management",
      link: "/access-management",
      icon: AccessManagementIcon
    },
    {
      name: "Reference Data",
      link: "/reference-data",
      icon: ReferenceDataIcon
    },
    {
      name: "Vaccine Forecasting",
      link: "/vaccine-forecasting",
      icon: VaccineForecastingIcon
    },
    {
      name: "Reports",
      link: "/reports",
      icon: ReportsIcon
    },

  ];
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div>
      <div className={`w-[115px] pt-5 bg-bgColor h-screen flex flex-col items-center`}>
      <CgMenu className={` text-seconderyColor text-3xl rounded absolute -right-28 top-[25px] cursor-pointer1`} onClick={() => setCollapsed(!collapsed)} />
        <ul>
          {navlinks.map((menu, index) => (
            <Link onClick={() => onMenuClick(menu.name)} to={menu.link} className={`group rounded-md flex flex-col items-center text-center align-middle gap-2`}>
              <li key={index} />
              <img className=" w-8 iconColor text-center text-[#727272]" src={menu.icon} />
              <span className={`pl-1 text-sideBarTextColor`}>{menu.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
