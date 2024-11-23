import React from 'react'
import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import UserInfo from "./userInfo"



const usertable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [openInfo, setOpenInfo] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [userInfo, setUserInfo] = useState(null);





    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="#"
                        onClick={() => {
                            setOpenInfo(true)
                            setUserInfo(record)
                        }}
                    >{record._id}</a>
                )
            }
            ,
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "30px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];



    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <UserInfo
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                setOpenInfo={setOpenInfo}
                openInfo={openInfo}
            />

        </>
    )
}

export default usertable
