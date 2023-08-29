import { Loader, LoadingStyled } from "./LoadingStyled"

export function Loading() {
    return (
        <LoadingStyled>
            <Loader>
                <h3>Carregando...</h3>
            </Loader>
        </LoadingStyled>
    )
}
