import { Loader, LoaderContainer } from "./LoadingStyled"
import loading from "../../images/loading-bars.svg"

export function Loading() {
    return (
        <LoaderContainer>
            <Loader>
                <div>
                    <img src={loading} alt="Loading" />
                </div>
                <h3>Carregando...</h3>
            </Loader>
        </LoaderContainer>
    )
}
