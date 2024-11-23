
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Drawer } from 'antd';

const userInfo = (props) => {
    const { userInfo, setUserInfo, openInfo, setOpenInfo } = props


    const onClose = () => {
        setOpenInfo(false);
        setUserInfo(null)
    };

    return (
        <>
            <Drawer title="Chi tiết User"
                onClose={onClose}
                open={openInfo}
                maskClosable={false}
            >
                {
                    userInfo ? <>
                        <p>Id: {userInfo._id}</p>
                        <br />
                        <p>Id: {userInfo.fullName}</p>
                        <br />
                        <p>Id: {userInfo.email}</p>
                        <br />
                        <p>Id: {userInfo.phone}</p>
                        <br />


                    </>
                        :
                        <>
                            <p>Không tìm thấy user</p>
                        </>
                }
            </Drawer>
        </>
    )
}

export default userInfo