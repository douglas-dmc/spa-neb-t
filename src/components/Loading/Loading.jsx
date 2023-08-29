import { Loader, LoaderContainer } from "./LoadingStyled"

export function Loading() {
    return (
        <LoaderContainer>
            <Loader>
                <h3>Carregando...</h3>
            </Loader>
        </LoaderContainer>
    )
}
