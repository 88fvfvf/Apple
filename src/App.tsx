import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./components/Error/Error"
import Video from "./components/Video/Video"
import ApplePage from "./pages/ApplePage"
import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import ModelPage from "./pages/ModelPage"
import ProductsPage from "./pages/ProductsPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <Error />
    },
    {
        path: '/apple',
        element: <ApplePage />,
        errorElement: <Error />
    },
    {
        path: "/cart",
        element: <CartPage />,
        errorElement: <Error />
    },
    {
        path: "/apple/:categories",
        element: <ProductsPage />,
        errorElement: <Error />
    },
    {
        path: "/apple/:categories/:title",
        element: <ModelPage />,
        errorElement: <Error />
    },
    {
        path: '/video',
        element: <Video />
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App