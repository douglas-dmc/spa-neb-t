import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Message } from "./components/Message/Message"
import { NavBar } from "./components/NavBar/NavBar"

import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

function App() {
    const location = useLocation()
    let message = ""
    let typeMessage = ""

    console.log(location)

    if (location.state) {
        message = location.state.message,
        typeMessage = location.state.typeMessage
    }

    return (
        <>
            <Header />
            <NavBar />
            {message && <Message type={typeMessage} msg={message} />}
            <Outlet />
            <Footer />
        </>
    )
}

export default App
