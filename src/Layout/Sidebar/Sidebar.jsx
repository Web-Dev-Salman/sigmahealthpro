import React, { useState } from 'react';
import logoIconSigma from '../../assets/Icon/SigmaHealthProIcon.svg';
import logoSigma from '../../assets/Logo/SigmaHealthProLogo.svg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import DashboardIcon from "../../assets/Icon/Control Panel.png"
import EnrollmentReqiestIcon from "../../assets/Icon/Invite.png"
import PatientManagementIcon from "../../assets/Icon/Management.png"
import VaccineManagementIcon from "../../assets/Icon/Vaccine Management.png"
import SiteManagementIcon from "../../assets/Icon/Product Management.png"
import UserManagementIcon from "../../assets/Icon/Businessman.png"
import AccessManagementIcon from "../../assets/Icon/Conference.png"
import ReferenceDataIcon from "../../assets/Icon/Admin Settings Male.png"
import VaccineForecastingIcon from "../../assets/Icon/Vaccine Management.png"
import ReportsIcon from "../../assets/Icon/Graph Report.png"

const Sidebar = ({ onMenuClick }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navlinks = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: DashboardIcon,
        },
        {
            name: "Enrollment Request",
            icon: EnrollmentReqiestIcon,
            submenu: true,
            subMenuItems: [
                {
                    name: "Address",
                    link: "/addresses",
                    icon: DashboardIcon,
                },
                {
                    name: "Users Clinicals",
                    link: "/users-clinicals",
                    icon: DashboardIcon,
                },
            ]
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

    return (
        <div className={` z-10  relative `}>
            <div className='logo-div bg-white-900 p-4 '>
                <div className='inline-flex'>
                    <img className={`w-full pl-4 duration-500`} src={logoIconSigma} alt="" />
                    <img className={`w-auto duration-300 absolute top-[30px] left-[65px]`} src={logoSigma} alt="" />
                </div>

            </div>
            <div className={`w-[115px] pt-5 bg-bgColor h-[calc(100vh-82px)] flex flex-col items-center`}>
                <ul>
                    {navlinks.map((menu, index) => (
                        <Link onClick={() => onMenuClick(menu.name)} to={menu.link} >
                            <li key={index} className={` rounded-md flex flex-col items-center text-center align-middle gap-1.5 `}>
                                <img className=" w-8 iconColor text-center text-[#727272]" src={menu.icon} />
                                <span className={`pl-1 text-sideBarTextColor leading-4	`}>{menu.name}</span>
                                <div onClick={() => onMenuClick()}>
                                </div>
                            </li>
                                                        
                            { menu.submenu && (
                               <FaArrowRight onMenuClick={() => setCollapsed(!collapsed)} />
                            )}
                            {menu.submenu && collapsed &&(
                                <ul >
                                    {
                                        menu.subMenuItems.map((subMenuItems, index) => (
                                            <Link to={subMenuItems.link}>
                                            <li key={index} className={` rounded-md flex flex-col items-center text-center align-middle gap-1.5 `}>
                                                <img className=" w-8 iconColor text-center text-[#727272]" src={subMenuItems.icon} />
                                                <span className={`pl-1 text-sideBarTextColor leading-4	`}>{subMenuItems.name}</span>
                                            </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            )}
                        </Link>
                    ))}

                </ul>
            </div>

        </div>
    );
};

export default Sidebar;