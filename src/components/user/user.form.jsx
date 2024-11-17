import React, { useState } from 'react'
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const UserForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleClickBtn = () => {
        console.log("check data:", { fullName, email, password, phoneNumber });
        // send to server
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