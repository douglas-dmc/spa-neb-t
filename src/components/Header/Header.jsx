import ctex from "../../images/ctex.png"
import { Head } from "./HeaderStyled"

export function Header() {
    return (
        <>
            <Head>
                <img src={ctex} alt="ctex" />
                <div>
                    <p>
                        Sistema de Normas Técnicas do Exército Brasileiro -{" "}
                        <i>SisNEB</i>
                    </p>
                </div>
            </Head>
        </>
    )
}
