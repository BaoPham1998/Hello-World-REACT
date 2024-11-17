import React from 'react'
import Usertable from '../components/user/user.table'
import UserForm from '../components/user/user.form'
const usersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />

            <Usertable />

        </div>
    )
}

export default usersPage