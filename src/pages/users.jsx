import UserTable from '../components/user/user.table'
import UserForm from '../components/user/user.form'
import { fetchAllUserAPI } from '../services/api.services'
import { useState } from 'react';
import { useEffect } from 'react';


const usersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
            />
        </div>
    )
}

export default usersPage