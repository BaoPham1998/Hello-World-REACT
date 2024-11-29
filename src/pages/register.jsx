import { Button, Input, Form, notification } from 'antd';
import { registerUserAPI } from '../services/api.services';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone)
        if (res.data) {
            notification.success({
                message: "Register",
                description: "Register successfully"
            });
            navigate('/login')
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message)
            })

        }

        console.log("check values", values)
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <div style={{
                margin: "50px",
            }}>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },

                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!"
                        }

                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary"
                    onClick={() => { form.submit() }}
                    style={{
                        width: "100px"
                    }}
                > Register</Button>

            </div>
        </Form >
    )
}

export default RegisterPage