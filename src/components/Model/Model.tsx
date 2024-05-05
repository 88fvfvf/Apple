import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCart } from "../../store/Cart/Cart.slice";
import { useGetAplleByIdQuery } from "../../store/api/apiProducts";
import Bread from "../Breadcrumb/Bread";
import BtnCounter from "../Button/BtnCounter";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import './StyleModel.scss';

const Model = () => {
    const { setId, model } = useAppSelector(state => state.getById);
    const cart = useAppSelector(state => state.CartSlice.cart)
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useGetAplleByIdQuery({ id: setId, categories: model });
    const [imgKey, setImgKey] = useState<number>(0)

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            {isError ? (
                <Error />
            ) : (
                <div className="product__item">
                    <Bread title={'Apple'} more={data?.categories} name={data?.title} />
                    <div className="product__item_main">
                        <div className="product__galery">
                            {data?.galery.map((img: string, key: number) => (
                                <div className="galery__item" onClick={() => setImgKey(key)} key={key}>
                                    <img src={img} alt="no images" />
                                </div>
                            ))}
                        </div>
                        <div className="product__images">
                            <img src={data?.galery[imgKey]} alt="unknown" />
                        </div>
                        <div className="product__item_info">
                            <h1>{data?.title}</h1>
                            <h3>${data?.price} USD</h3>

                            {cart.find(cartItem => cartItem.id === data?.id) ? (
                                cart.map(cartItem => cartItem.id === data?.id && (
                                    <BtnCounter key={cartItem.id} count={cartItem.count} id={cartItem.id} />
                                ))
                            ) : (
                                <button onClick={() => dispatch(getCart(data))}>в корзину</button>
                            )}

                        </div>
                    </div>
                    <div className="product__title">
                        <h2>Технические характеристики</h2>
                        <h2>Описание</h2>
                    </div>
                    <div className="product__about">
                        <div className="product__spec">
                            {data?.specifications ? (
                                <p dangerouslySetInnerHTML={{ __html: data.specifications }} />
                            ) : (
                                <p>Нет технических характеристик</p>
                            )}
                        </div>
                        <div className="product__desc">
                            <p>{data?.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Model;
