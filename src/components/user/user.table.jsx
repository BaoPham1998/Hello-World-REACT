import React from 'react'
import { Table } from 'antd';

const usertable = (props) => {
    const { dataUsers } = props;
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



    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default usertable
