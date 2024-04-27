import { Empty } from "antd"
import { MdDeleteOutline } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { deleteAll, deleteProduct } from "../../store/Cart/Cart.slice"
import BtnCounter from "../Button/BtnCounter"
import './StyleCart.scss'
import UserOrderCart from "./UserOrderCart"
import { setId, setModel } from "../../store/getById/getById.slice"
import { Link } from "react-router-dom"

const Cart = () => {
    const cart = useAppSelector(state => state.CartSlice.cart)
    const dispatch = useAppDispatch()

    if (cart.length === 0) {
        return (
            <Empty description='Корзина пустая' />
        )
    }

    const checkDelete: () => void = () => {
        if (window.confirm('Вы действительно хотите удалить корзину?')) {
            dispatch(deleteAll())
        }
    }


    return (
        <div className="Cart">
            <div className="Cart__Left">
                <div className="Cart_other">
                    <h3>Корзина ({cart.length})</h3>
                    <div className="Cart_delete" onClick={() => checkDelete()}>
                        <h4><MdDeleteOutline size={25} color="#fd2d40" />Очистить все</h4>
                    </div>
                </div>
                {cart.map(item => (
                    <div className="Cart_block" key={item.id} onClick={() => {
                        dispatch(setId(item.id))
                        dispatch(setModel(item.categories))
                    }}>
                        <Link to={`/apple/${item.categories}/${item.title}`}>
                            <div className="Cart__img">
                                <img src={item.images} alt="unknown" />
                            </div>
                            <div className="Cart__title">
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                        <BtnCounter count={item.count} id={item.id} />
                        <div className="Cart__price">
                            <h4>${item.price} USD</h4>
                        </div>
                        <div className="Cart__delete" onClick={() => dispatch(deleteProduct(item.id))}>
                            <MdDeleteOutline size={25} color="#fd2d40" cursor={'pointer'} />
                        </div>
                    </div>
                ))}
            </div>
            <UserOrderCart />
        </div >
    )
}

export default Cart