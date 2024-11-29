import { Button, Input, Form } from 'antd';

const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
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
                    label="Username"
                    name="username"
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
                            message: 'Please input your Phone number!',
                        },
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