

import { Drawer, Button } from 'antd';

const userInfo = (props) => {
    const { userInfo, setUserInfo, openInfo, setOpenInfo } = props


    const onClose = () => {
        setOpenInfo(false);
        setUserInfo(null)
    };

    return (
        <>
            <Drawer title="Chi tiết User"
                width={"40vw"}
                onClose={onClose}
                open={openInfo}
                maskClosable={false}
            >
                {
                    userInfo ? <>
                        <p>Id: {userInfo._id}</p>
                        <br />
                        <p>Full name: {userInfo.fullName}</p>
                        <br />
                        <p>Email: {userInfo.email}</p>
                        <br />
                        <p>Phone number: {userInfo.phone}</p>
                        <br />
                        <p>Avatar:</p>
                        <br />
                        <div>
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${userInfo.avatar}`}
                                height={150} width={150}></img>
                        </div>
                        <div style={{ marginTop: "18px" }}>
                            <label htmlFor='btnUpload' style={{
                                backgroundColor: "#2877FF",
                                color: "white",
                                padding: "10px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }}>Upload Avatar</label>
                            <input type='file' hidden id='btnUpload' />
                        </div>
                        {/* <Button type='primary'>Upload Avatar</Button> */}



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