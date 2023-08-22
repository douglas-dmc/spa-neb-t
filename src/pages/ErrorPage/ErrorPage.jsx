import { useRouteError } from "react-router-dom"
import { ErrorBlock } from "./ErrorPageStyled"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <ErrorBlock>
            <fieldset>
                <legend>Erro</legend>
                <div>
                    <h1>Ops!</h1>
                    <p>Desculpe, um erro inesperado ocorreu!</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </fieldset>
        </ErrorBlock>
    )
}
