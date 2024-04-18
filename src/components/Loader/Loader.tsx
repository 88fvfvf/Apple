import { Spin } from "antd"
import './StyleLoader.css'

const Loader = () => {
    return (
        <div className="spin">
            <Spin size="large" />
        </div>
    )
}

export default Loader