import ctex from "../../images/ctex.png"
import { Head } from "./HeaderStyled"

export function Header() {
    return (
        <>
            <Head>
                <img src={ctex} alt="ctex" />
                <div>
                    <p>Normas Técnicas do Exército Brasileiro (NEB/T)</p>
                </div>
            </Head>
        </>
    )
}
