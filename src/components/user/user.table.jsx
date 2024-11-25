import { Table, Popconfirm, message, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import UserInfo from "./userInfo"
import { deleteUser } from '../../services/api.services';



const usertable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [openInfo, setOpenInfo] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [userInfo, setUserInfo] = useState(null);


    const handleDeleteUser = async (id) => {

        const res = await deleteUser(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Delete user thành công"
            })
            await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })

        }
    }

    const cancel = () => {
        message.error('Click on No');
    };

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

                    <Popconfirm
                        placement="left"
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

                </div >
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
