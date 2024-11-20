import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.services'
import { useState } from 'react';

const usertable = () => {

    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }
    ];


    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log(">> run render 000")
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default usertable
