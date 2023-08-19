import ctex from "../../images/ctex.png"
import { Head } from "./HeaderStyled"

export function Header() {
    return (
        <>
            <Head>
                <img src={ctex} alt="Logo CTEx" />
                <div>
                    <p>
                        SisNEB - Sistema de Normas Técnicas do Exército
                        Brasileiro
                    </p>
                </div>
            </Head>
        </>
    )
}
