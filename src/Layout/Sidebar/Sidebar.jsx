import React, { useState } from 'react';
import logoIconSigma from '../../assets/Icon/SigmaHealthProIcon.svg';
import logoSigma from '../../assets/Logo/SigmaHealthProLogo.svg';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
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

const Sidebar = ({ onMenuClick }) => {

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
        // {
        //     subMenu: true,
        //     spacing: true,
        //     subMenuList: [
        //         {
        //             name: "User",
        //             link: "/users",
        //             icon: EnrollmentReqiestIcon,
        //         },
        //         {
        //             name: "User",
        //             link: "/users",
        //             icon: EnrollmentReqiestIcon,
        //         },
        //     ]
        // },
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
        // w-64
        <div className={` z-10 h-screen relative `}>
            <div className='logo-div bg-white-900 p-4 '>
                <IoIosArrowForward className={` text-seconderyColor text-3xl rounded absolute -right-28 top-[25px] cursor-pointer1 ${!collapsed ? "rotate-180 duration-500" : " rotate-0 duration-300"}`} onClick={() => setCollapsed(!collapsed)} />
                <div className='inline-flex'>
                    <img className={`w-full pl-4 ${!collapsed && "rotate-[360deg] w-full"} duration-500`} src={logoIconSigma} alt="" />
                    <img className={`w-auto duration-300 absolute top-[30px] left-[65px] ${!collapsed && "d-hidden "}`} src={logoSigma} alt="" />
                </div>

            </div>
            {/* w-[115px] */}
            <div className={`w-[115px] pt-5 bg-bgColor h-screen flex flex-col items-center`}>
                <ul>
                    {navlinks.map((menu, index) => (
                        <Link onClick={() => onMenuClick(menu.name)} to={menu.link} className={`group rounded-md flex flex-col items-center text-center align-middle gap-2`}>
                            <li key={index} />
                            <img className=" w-8 iconColor text-center text-[#727272]" src={menu.icon} />
                            <span className={`pl-1 text-sideBarTextColor`}>{menu.name}</span>
                            {/* {!collapsed && <div className={`absolute rounded-md px-2 py-1 w-max bg-mainColor text-white left-full invisible group-hover:visible`}>{menu.name}</div>} */}
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;