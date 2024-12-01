import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UsergroupAddOutlined, HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useContext } from "react"
import { AuthContext } from '../context/auth.context';


const header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext);
    console.log(user);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    const items = [{
        label: <Link to={"/"}>Home</Link>,
        key: 'Home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to={"/Users"}>Users</Link>,
        key: 'Users',
        icon: <UsergroupAddOutlined />,
    },
    {
        label: <Link to={"/Book"}>Book</Link>,
        key: 'Book',
        icon: <BookOutlined />,
    },
    {
        label: 'Cài đặt',
        key: 'Setting',
        icon: <SettingOutlined />,
        children: [
            {
                label: <Link to={"/login"}>Đăng nhập</Link>,
                key: 'Login',
            },
            {
                label: 'Đăng xuất',
                key: 'Logout',
            }
        ]
    }
    ]

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default header