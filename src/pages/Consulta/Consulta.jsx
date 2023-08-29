import { useEffect, useState } from "react"
import { ConsultaContainer } from "./ConsultaStyled"
import DataTable, { Alignment, createTheme } from "react-data-table-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Loading } from "../../components/Loading/Loading"

export function Consulta() {
    const columns = [
        {
            name: "TIPO",
            selector: (row) => row.tipo,
            width: "70px",
            center: true,
            sortable: true,
        },
        {
            name: "NÚMERO",
            selector: (row) => row.numero,
            width: "85px",
            sortable: true,
        },
        {
            name: "EDIÇÃO",
            selector: (row) => row.edicao,
            width: "70px",
        },
        {
            name: "TÍTULO",
            selector: (row) => row.titulo,
            width: "350px",
            sortable: true,
        },
        {
            name: "HOMOLOGAÇÃO",
            selector: (row) => row.be_data,
            width: "120px",
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            center: true,
            sortable: true,
        },
        {
            cell: () => (
                <button>
                    <i className="bi bi-search"></i>
                </button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "50px",
            center: true,
        },
        {
            cell: () => (
                <button>
                    <i className="bi bi-trash-fill"></i>
                </button>
            ),
            ignoreRowClick: true,
            button: true,
            width: "50px",
            center: true,
        },
    ]

    const [data, setData] = useState()
    const [pending, setPending] = useState(true)

    // Carrega os dados para o DataTable
    useEffect(() => {
        fetch("http://localhost:5000/cadastros", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((data) => {
                const timeout = setTimeout(() => {
                    setData(data)
                    setPending(false)
                }, 1000)
                return () => {
                    clearTimeout(timeout)
                }
            })
            .catch((error) => console.log(error))
    }, [])

    createTheme(
        "solarized",
        {
            text: {
                primary: "#000",
                secondary: "#af1111",
            },
            background: {
                default: "#fff",
            },
            context: {
                background: "#cb4b16",
                text: "#FFFFFF",
            },
            divider: {
                default: "#ccc",
            },
            button: {
                default: "#af1111",
            },
            action: {
                button: "#af1111",
                hover: "#e091913a",
                disabled: "rgba(0,0,0,.12)",
            },
        },
        "light"
    )

    const customStyles = {
        rows: {
            style: {
                minHeight: "30px",
            },
        },
        headCells: {
            style: {
                minHeight: "20px",
                paddingLeft: "5px",
                paddingRight: "5px",
            },
        },
        cells: {
            style: {
                paddingLeft: "6px",
                paddingRight: "6px",
            },
        },
        pagination: {
            style: {
                minHeight: "40px",
            },
            pageButtonsStyle: {
                backgroundColor: 'red',
            }
        },
        
    }

    const paginationComponentOptions = {
        noRowsPerPage: false,
        rowsPerPageText: "normas por página:",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

    const ExpandedComponent = ({ data }) => {
        <pre>{JSON.stringify(data, null, 2)}</pre>
        console.log(data)
    }

    return (
        <ConsultaContainer>
            <fieldset>
                <div className="legenda">
                    <legend>Consulta de NEB/T</legend>
                </div>
                <div className="tabela">
                    <div className="pesquisa">
                        <input type="search" placeholder="Pesquisar" />
                        <button>
                            <FontAwesomeIcon
                                className="iconNavbar"
                                icon={faMagnifyingGlass}
                            />
                        </button>
                    </div>
                    <DataTable
                        columns={columns} // set as colunas
                        data={data} // recebe os dados
                        theme="solarized" // define o tema
                        customStyles={customStyles} // define estilos personalizados
                        progressPending={pending} // ativa o carregamento dos dados
                        progressComponent={<Loading />} // define mensagem para carregamento
                        paginationComponentOptions={paginationComponentOptions} // define opções de paginação
                        pagination // inclui a paginação
                        fixedHeader={true} // fixa o cabeçalho
                        fixedHeaderScrollHeight="320px" // inclui uma barra de rolagem
                        defaultSortFieldId={4} // define a coluna do título com padrão no carregamento da página
                        highlightOnHover // ativa o hover sobre as linhas
                        dense // reduz a altura do cabeçalho
                        expandableRows // habilita a expansão de linhas
                        expandableRowsComponent={ExpandedComponent}
                        subHeaderAlign={Alignment.CENTER}
                    />
                </div>
            </fieldset>
        </ConsultaContainer>
    )
}
