import { Link } from "react-router-dom"
import { Nav } from "./NavBarStyled"

export function NavBar() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/cadastro">
                        <i className="bi bi-save-fill"></i>Cadastro
                    </Link>
                </li>

                <li>
                    <Link to="/consulta">
                        <i className="bi bi-search"></i>Consulta
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="bi bi-pencil-fill"></i>Edição
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="bi bi-gear-fill"></i>Administração
                    </Link>
                </li>
                <li>
                    <Link to="/contato">
                        <i className="bi bi-person-lines-fill"></i>Contato
                    </Link>
                </li>

                <li>Olá, Douglas Marques da Costa</li>
                <li>
                    <Link>
                        <i className="bi bi-box-arrow-right"></i>Sair
                    </Link>
                </li>
            </ul>
        </Nav>
    )
}
