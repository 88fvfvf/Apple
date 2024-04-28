import { Link } from "react-router-dom"
import { useAppDispatch } from "../../hooks/hooks"
import { setCategories } from "../../store/Categories/Categories.slice"
import { useGetAppleQuery } from "../../store/api/apiProducts"
import { setId } from "../../store/getById/getById.slice"
import Bread from "../Breadcrumb/Bread"
import './StyleApple.scss'
import Loader from "../Loader/Loader"
import Error from "../Error/Error"

const Apple = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading, isError } = useGetAppleQuery(null)

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            {isError
                ?
                <Error />
                :
                <>
                    <Bread title={'Apple'} />
                    <div className="Apple">
                        {data?.map(apple => (
                            <Link to={`/apple/${apple?.categories}`} key={apple.id}>
                                <div
                                    className="Apple__item"
                                    key={apple.id}
                                    onClick={() => {
                                        dispatch(setCategories(apple.categories)),
                                            dispatch(setId(apple.id))
                                    }}>
                                    <h3>{apple?.title}</h3>
                                    <img src={apple?.images} alt="unknow" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default Apple