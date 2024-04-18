import Layouts from "../Layouts/Layouts"
import Banner from "../components/Home/Banner/Banner"
import Popular from "../components/Home/Popular/Popular"
import Loader from "../components/Loader/Loader"
import { useGetBannerQuery, useGetPopularQuery } from "../store/api/apiProducts"

const HomePage = () => {
    const { data, isLoading } = useGetBannerQuery(null)
    const { data:popular, isLoading: PopularLoading } = useGetPopularQuery(null)

    if (isLoading && PopularLoading) {
        return (
            <Loader />
        )
    }

    return (
        <Layouts>
            {data && <Banner data={data} />}
            <h1 style={{ textAlign: 'center' }}>Популярные категории</h1>
            {popular && <Popular popular={popular}/>}
        </Layouts>
    )
}
export default HomePage
