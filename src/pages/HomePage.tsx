import Layouts from "../Layouts/Layouts"
import Error from "../components/Error/Error"
import Accordion from "../components/Home/Accordion/Accordion"
import Banner from "../components/Home/Banner/Banner"
import Lineup from "../components/Home/Lineup/Lineup"
import Popular from "../components/Home/Popular/Popular"
import Loader from "../components/Loader/Loader"
import Titles from "../components/Titles/Titles"
import { useGetBannerQuery, useGetPopularQuery } from "../store/api/apiProducts"

const HomePage = () => {
    const { data, isLoading, isError } = useGetBannerQuery(null)
    const { data: popular, isLoading: PopularLoading, isError: isErrorPopular } = useGetPopularQuery(null)
    const error = isError && isErrorPopular

    if (isLoading && PopularLoading) {
        return (
            <Loader />
        )
    }

    return (
        <Layouts>
            {error ? (
                <Error />
            ) : (
                <>
                    {data && <Banner data={data} />}
                    <Titles title="Популярные категории" paddingTop={30} />
                    {popular && <Popular popular={popular} />}
                    <Titles title="Возможности Iphone с другими устройсвами" paddingTop={30} />
                    <Accordion />
                    <Titles title="Изучите модельный ряд." paddingTop={30} />
                    <Lineup />
                </>
            )}
        </Layouts>
    )
}
export default HomePage
