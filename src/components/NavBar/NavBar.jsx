import { Link } from "react-router-dom"
import { Nav } from "./NavBarStyled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFloppyDisk,
    faGear,
    faMagnifyingGlass,
    faPencil,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"

export function NavBar() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/cadastro">
                        <FontAwesomeIcon
                            className="iconNavbar"
                            icon={faFloppyDisk}
                        />
                        Cadastro
                    </Link>
                </li>

                <li>
                    <Link to="/consulta">
                        <FontAwesomeIcon
                            className="iconNavbar"
                            icon={faMagnifyingGlass}
                        />
                        Consulta
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon
                            className="iconNavbar"
                            icon={faPencil}
                        />
                        Edição
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon className="iconNavbar" icon={faGear} />
                        Administração
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
                        <FontAwesomeIcon
                            className="iconNavbar"
                            icon={faRightFromBracket}
                        />
                        Sair
                    </Link>
                </li>
            </ul>
        </Nav>
    )
}
