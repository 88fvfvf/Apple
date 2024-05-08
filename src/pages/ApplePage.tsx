import Layouts from "../Layouts/Layouts";
import Apple from "../components/Apple/Apple";
import Bread from "../components/Breadcrumb/Bread";
import Titles from "../components/Titles/Titles";

const ApplePage = () => {
    return (
        <Layouts>
            <Bread title={'Apple'} />
            <Titles title="Apple" />
            <Apple />
        </Layouts>
    )
}

export default ApplePage