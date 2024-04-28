import { BiError } from "react-icons/bi";
import './StyleError.scss'

const Error = () => {
    return (
        <div className="Error">
            <BiError size={100}/>
            <h1>Страница не загружено!</h1>
            <h4>Пожалуста обновите страницу</h4>
        </div>
    )
}

export default Error