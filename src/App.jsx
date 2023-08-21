import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
// import { Cadastro } from "./pages/Cadastro/Cadastro"
// import { Contato } from "./pages/Contato/Contato"

import { Outlet } from "react-router-dom"

function App() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
