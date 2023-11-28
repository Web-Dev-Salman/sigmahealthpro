import { Menu } from 'antd';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons'

const MenuList = () => {
    return (
        <Menu>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to={"/dashboard"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }> Dashboard</Link>
            </Menu.Item>
            <Menu.SubMenu key="enrollment-request" icon={<HomeOutlined />} title={"Enrollment Request"}>
                <Menu.Item key="enrollment-request" icon={<HomeOutlined />}>
                    <Link to={"/users"}> User </Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="patient-management" icon={<HomeOutlined />}>
                <Link to={"/patient-management"}> Patient Management</Link>
            </Menu.Item>
            <Menu.Item key="vaccine-management" icon={<HomeOutlined />}>
                <Link to={"/vaccine-management"}> Vaccine Management</Link>
            </Menu.Item>
            <Menu.Item key="site-management" icon={<HomeOutlined />}>
                <Link to={"/site-management"}> Site Management</Link>
            </Menu.Item>
            <Menu.Item key="user-management" icon={<HomeOutlined />}>
                <Link to={"/user-management"}> User Management</Link>
            </Menu.Item>
            <Menu.Item key="access-management" icon={<HomeOutlined />}>
                <Link to={"/access-management"}> Access Management</Link>
            </Menu.Item>
            <Menu.Item key="reference-data" icon={<HomeOutlined />}>
                <Link to={"/reference-data"}>Reference Data</Link>
            </Menu.Item>
            <Menu.Item key="vaccine-forecasting" icon={<HomeOutlined />}>
                <Link to={"/vaccine-forecasting"}>Vaccine Forecasting</Link>
            </Menu.Item>
            <Menu.Item key="reports" icon={<HomeOutlined />}>
                <Link to={"/reports"}>Reports</Link>
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;