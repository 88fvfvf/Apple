import Layouts from "../Layouts/Layouts"
import Bread from "../components/Breadcrumb/Bread"
import Cart from "../components/Cart/Cart"

const CartPage = () => {
    return (
        <Layouts>
            <Bread title={'cart'} />
            <Cart />
        </Layouts>
    )
}

export default CartPage