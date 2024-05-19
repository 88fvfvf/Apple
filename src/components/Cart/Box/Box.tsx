import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
import './StyleBox.scss';

const Box = () => {
    return (
        <div className="Box">
            <div className="icon">
                <BsBasket size={150} />
            </div>
            <div className="Box__title">
                <h2>Ваша корзина пуста</h2>
                <p>Перейдите в страницу Apple и начните покупку</p>
            </div>
            <Link to={'/Apple'}>
                <button>
                    Перейти в Apple
                </button>
            </Link>
        </div>
    )
}

export default Box