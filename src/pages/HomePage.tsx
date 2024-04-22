import Layouts from "../Layouts/Layouts"
import Accordion from "../components/Home/Accordion/Accordion"
import Banner from "../components/Home/Banner/Banner"
import Lineup from "../components/Home/Lineup/Lineup"
import Popular from "../components/Home/Popular/Popular"
import Loader from "../components/Loader/Loader"
import { useGetBannerQuery, useGetPopularQuery } from "../store/api/apiProducts"

const HomePage = () => {
    const { data, isLoading } = useGetBannerQuery(null)
    const { data: popular, isLoading: PopularLoading } = useGetPopularQuery(null)

    if (isLoading && PopularLoading) {
        return (
            <Loader />
        )
    }

    return (
        <Layouts>
            {data && <Banner data={data} />}
            <h1 style={{ textAlign: 'center', paddingTop: 30 }}>Популярные категории</h1>
            {popular && <Popular popular={popular} />}
            <Accordion />
            <h1 style={{ textAlign: 'center', paddingTop: 30 }}>Изучите модельный ряд.</h1>
            <Lineup />
        </Layouts>
    )
}
export default HomePage
