import axios from './axios.customize';



const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber,
    }
    return axios.post(URL_BACKEND, data)
}


const updateUserAPI = (_id, fullName, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phoneNumber,
    }
    return axios.put(URL_BACKEND, data)
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user?current=1&pageSize=1";

    return axios.get(URL_BACKEND)
}
const deleteUser = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND);
};
const handleUploadFile = (file,folder) => {
    const URL_BACKEND = "/api/v1/file/upload";
    let config ={
    headers: {
        'Content-Type': 'multipart/form-data',
        "upload-type" : folder,
      }
    }
      const bodyFormData = new FormData();
      bodyFormData.append('fileImg', file);

      return axios.post(URL_BACKEND, bodyFormData, config);


}

const updateUserAvatarAPI = (avatar,_id, fullName, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        avatar:avatar,
        _id: _id,
        fullName: fullName,
        phone: phoneNumber,
    }
    return axios.put(URL_BACKEND, data)
}

export { createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUser,handleUploadFile,updateUserAvatarAPI }