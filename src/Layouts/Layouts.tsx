import { PropsWithChildren } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layouts = ({ children }: PropsWithChildren) => {
    return (
        <div className="layouts">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layouts