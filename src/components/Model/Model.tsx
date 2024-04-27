import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCart } from "../../store/Cart/Cart.slice";
import { useGetAplleByIdQuery } from "../../store/api/apiProducts";
import Bread from "../Breadcrumb/Bread";
import Loader from "../Loader/Loader";
import './StyleModel.scss';

const Model = () => {
    const { setId, model } = useAppSelector(state => state.getById);
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetAplleByIdQuery({ id: setId, categories: model });

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="product__item">
            <Bread title={'Apple'} more={data?.categories} name={data?.title} />
            <div className="product__item_main">
                <img src={data?.images} alt="unknown" />
                <div className="product__item_info">
                    <h1>{data?.title}</h1>
                    <h3>${data?.price} USD</h3>
                    <button onClick={() => dispatch(getCart(data))}>Добавить в корзину</button>
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
                    <p>
                        {data?.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Model;
