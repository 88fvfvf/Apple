import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCart } from "../../store/Cart/Cart.slice";
import { useGetAppleProductsQuery } from "../../store/api/apiProducts";
import { setId, setModel } from "../../store/getById/getById.slice";
import Bread from "../Breadcrumb/Bread";
import BtnCounter from "../Button/BtnCounter";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import './StyleProducts.scss';

const Products = () => {
    const categories = useAppSelector(state => state.Categories.categories)
    const cart = useAppSelector(state => state.CartSlice.cart)
    const dispatch = useAppDispatch()
    const { data, isLoading, isError } = useGetAppleProductsQuery(categories)

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            {isError ? (
                <Error />
            ) : (
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

                                {cart.find(cartItem => cartItem.id === product.id) ? (
                                    cart.map(cartItem => cartItem.id === product.id && (
                                        <BtnCounter key={cartItem.id} count={cartItem.count} id={cartItem.id} />
                                    ))
                                ) : (
                                    <button
                                        onClick={() => {
                                            dispatch(getCart(product))
                                        }}
                                    >
                                        В Корзинку
                                    </button>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Products
