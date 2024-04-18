import { useAppSelector } from '../../hooks/hooks'
import './StyleOrder.scss'

const UserOrderCart = () => {
    const { cart, totalPrice } = useAppSelector(state => state.CartSlice)

    const totalCount = cart.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className="UserOrderCart">
            <div className="Order_title">
                <h3>Ваш заказ</h3>
            </div>
            <div className="Order_produsts_title">
                <h4>Товары: {totalCount}</h4>
            </div>
            <hr />
            <div className="Order_Total_cost">
                <h4>Общая стоимость:</h4>
                <h4>${totalPrice} USD</h4>
            </div>
            <div className="Orders_button">
                <button>
                    <h3>Перейти к оформлению</h3>
                </button>
            </div>
        </div>
    )
}

export default UserOrderCart