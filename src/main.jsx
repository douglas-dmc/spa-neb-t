import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx"
import { Contato } from "./pages/Contato/Contato.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {   
                path: "cadastro", 
                element: <Cadastro />
            },
            {
                path: "contato",
                element: <Contato />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
