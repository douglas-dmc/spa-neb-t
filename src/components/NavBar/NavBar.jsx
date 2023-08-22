import { Link } from "react-router-dom"
import { Nav } from "./NavBarStyled"

export function NavBar() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/cadastro">
                        <i className="bi bi-save-fill"></i>Cadastrar
                    </Link>
                </li>

                <li>
                    <Link>
                        <i className="bi bi-search"></i>Consultar
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="bi bi-pencil-fill"></i>Editar
                    </Link>
                </li>

                <li>
                    <Link to="/contato">
                        <i className="bi bi-person-lines-fill"></i>Contato
                    </Link>
                </li>

                <li>
                    <Link>
                        <i className="bi bi-box-arrow-right"></i>Sair
                    </Link>
                </li>
                <li>Olá, Douglas Marques da Costa</li>
            </ul>
        </Nav>
    )
}
