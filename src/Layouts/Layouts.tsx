import { PropsChildren } from "../types/IChildren"
import Header from "../components/Header/Header"

const Layouts = ({ children }: PropsChildren) => {
    return (
        <div className="layouts">
            <Header/>
            {children}
        </div>
    )
}

export default Layouts