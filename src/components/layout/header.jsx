import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UsergroupAddOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from "react"


const header = () => {
    const [current, setCurrent] = useState('');
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
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default header