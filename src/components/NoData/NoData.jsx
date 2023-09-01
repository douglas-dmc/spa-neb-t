import { DataMsg, NoDataContainer } from "./NoDataStyled"

export function NoData() {
    return (
        <NoDataContainer>
            <DataMsg>
                <i className="bi bi-emoji-frown-fill"></i>
                <p>Nenhuma NEB/T foi encontrada!</p>
            </DataMsg>
        </NoDataContainer>
    )
}
