
import { Link } from "react-router-dom";
import { Menu } from "antd"
import {
    UsergroupAddOutlined, HomeOutlined, BookOutlined,
    LoginOutlined, AliwangwangOutlined
} from '@ant-design/icons';
import { useState, useContext } from "react"
import { AuthContext } from '../context/auth.context';


const header = () => {
    const [current, setCurrent] = useState('');
    const { user, setIsLoadingPage } = useContext(AuthContext);

    const onClick = (e) => {
        setCurrent(e.key);
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
        setIsLoadingPage(false);
    }


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

    ...(!user.id ? [{
        label: <Link to={"/login"}>Đăng nhập</Link>,
        key: 'login',
        icon: <LoginOutlined />,
    }] : []),

    ...(user.id ? [{
        label: `welcome ${user.fullName}`,
        key: 'welcomeUser',
        icon: <AliwangwangOutlined />,
        children: [
            {
                label: <a onClick={() => logout()}>Đăng xuất</a>,
                key: 'Logout',
            }
        ]
    }] : []),

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