import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCart } from "../../store/Cart/Cart.slice";
import { useGetAppleProductsQuery } from "../../store/api/apiProducts";
import { setId, setModel } from "../../store/getById/getById.slice";
import Bread from "../Breadcrumb/Bread";
import Loader from "../Loader/Loader";
import './StyleProducts.scss';

interface clickedButton {
    [key: number]: boolean
}

const Products = () => {
    const categories = useAppSelector(state => state.Categories.categories)
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetAppleProductsQuery(categories)
    const [clickedButtons, setClickedButtons] = useState<clickedButton>({})

    const checkIsClick = (productId: number) => {
        setClickedButtons(prevState => ({
            ...prevState,
            [productId]: true
        }))
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="categories">
            <Bread title={'Apple'} more={categories} />
            <div className="product">
                {data?.map(product => (
                    <div className="card" key={product.id} onClick={() => {
                        dispatch(setId(product.id));
                        dispatch(setModel(categories));
                    }}>
                        <Link to={`/apple/${product.categories}/${product?.title}`} >
                            <img src={product.images} alt="unknown" />
                            <div className="product__text">
                                <h3>{product.title}</h3>
                                <h4>${product.price} USD</h4>
                            </div>
                        </Link>
                        <button className={clickedButtons[product.id] ? 'isClick' : ''} onClick={() => { dispatch(getCart(product)), checkIsClick(product.id) }}>В Корзинку</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
