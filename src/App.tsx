import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ApplePage from "./pages/ApplePage"
import CartPage from "./pages/CartPage"
import ModelPage from "./pages/ModelPage"
import ProductsPage from "./pages/ProductsPage"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/apple',
        element: <ApplePage />
    },
    {
        path: "/cart",
        element: <CartPage />
    },
    {
        path: "/apple/:categories",
        element: <ProductsPage />
    },
    {
        path: "/apple/:categories/:title",
        element: <ModelPage />
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App