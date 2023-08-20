import { Nav } from "./NavBarStyled"

export function NavBar() {
    return (
        <>
            <Nav>
                <ul>
                    <li>
                        <i className="bi bi-save-fill"></i>Cadastrar
                    </li>
                    <li>
                        <i className="bi bi-search"></i>Consultar
                    </li>
                    <li>
                        <i className="bi bi-pencil-fill"></i>Editar
                    </li>
                    <li>
                        <i className="bi bi-person-lines-fill"></i>Contato
                    </li>
                    <li>
                        <i className="bi bi-box-arrow-right"></i>Sair
                    </li>
                    <li>Olá, Douglas Marques da Costa</li>
                </ul>
            </Nav>
        </>
    )
}
