import { useContext } from "react"
import { AuthContext } from "../components/context/auth.context"
import { Link } from "react-router-dom"
import { Button, Result } from "antd"


const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext)
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <Result
                status="403"
                title="Unauthorize!"
                subTitle={"Bạn cần đăng nhập để truy cập trang này"}
                extra={
                    <Button type="primary" >
                        <Link to="/">
                            <span>Back to Home Page</span>
                        </Link>
                    </Button>
                }
            />
        )
    }

}

export default PrivateRoute