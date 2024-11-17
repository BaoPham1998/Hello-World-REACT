import React, { useState } from 'react'
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios';
const UserForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phoneNumber,
        }
        axios.post(URL_BACKEND, data)
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>fullName</span>
                    <Input placeholder="Enter fullName"
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Enter Email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="Enter Password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input placeholder="Enter Phone number"
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>
                <div>
                    <Button type="primary"
                        onClick={handleClickBtn}
                    > Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm