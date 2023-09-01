import { useEffect, useMemo, useState } from "react"
import { ConsultaContainer } from "./ConsultaStyled"
import DataTable, { createTheme } from "react-data-table-component"
import { Loading } from "../../components/Loading/Loading"
import PropTypes from "prop-types"
import Moment from "moment"
import { NoData } from "../../components/NoData/NoData"
import SignPlus from "../../images/plus-square.svg"
import SignDash from "../../images/dash-square.svg"

export function Consulta() {
    const convertType = (value) => {
        switch (value) {
            case "E":
                value = "Especificação"
                break
            case "M":
                value = "Método de Ensaio"
                break
            case "Pr":
                value = "Procedimento"
                break
            case "Pd":
                value = "Padronização"
                break
            case "C":
                value = "Classificação"
                break
            case "T":
                value = "Terminologia"
                break
            case "S":
                value = "Simbologia"
                break
        }
        return value
    }

    const unionNEBT = (tipo, numero, alteracao) => {
        if (!alteracao || alteracao == "NA") {
            alteracao = ""
        }
        let nebt = tipo + "-" + numero.toString() + " " + alteracao

        return nebt
    }

    const columns = [
        {
            name: "NEB/T",
            selector: (row) => unionNEBT(row.tipo, row.numero, row.edicao),
            width: "110px",
        },
        {
            name: "TÍTULO",
            selector: (row) => row.titulo,
            width: "420px",
            sortable: true,
        },
        {
            name: "TIPO",
            selector: (row) => convertType(row.tipo),
            width: "180px",
            center: true,
            sortable: true,
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            center: true,
            sortable: true,
        },
        {
            cell: () => (
                <button className="btn_acao">
                    <i className="bi bi-search"></i>
                </button>
            ),
            ignoreRowClick: true,
            // allowOverflow: true,
            // button: true,
            width: "50px",
            center: true,
        },
        {
            cell: (row) => (
                <button className="btn_acao" onClick={() => alert(row.id)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            ),
            ignoreRowClick: true,
            // button: true,
            width: "50px",
            center: true,
        },
    ]

    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)
    const [records, setRecords] = useState([])
    const [search, setSearch] = useState("")

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
                backgroundColor: "red",
            },
        },
    }
    function ExpandedComponent({ data }) {
        console.log({ data })
        return (
            <>
                <dl>
                    <dt>
                        <strong>OBJETIVO:</strong>
                    </dt>
                    <dd>{data.objetivo}</dd>
                    <dt>
                        <strong>APROVAÇÃO:</strong>
                    </dt>
                    <dd>
                        Boletim Interno do CTEx nº {data.bi_numero}, de{" "}
                        {Moment(data.bi_data).format("DD/MM/YYYY")}{" "}
                    </dd>
                    <dt>
                        <strong>HOMOLOGAÇÃO:</strong>
                    </dt>
                    <dd>
                        Boletim do Exército nº {data.be_numero}, de{" "}
                        {Moment(data.be_data).format("DD/MM/YYYY")}{" "}
                    </dd>
                </dl>
            </>
        )
    }

    ExpandedComponent.propTypes = {
        data: PropTypes.object,
        objetivo: PropTypes.string,
        bi_numero: PropTypes.number,
        bi_data: PropTypes.string,
        be_numero: PropTypes.number,
        be_data: PropTypes.string,
    }

    const paginationComponentOptions = {
        noRowsPerPage: false,
        rowsPerPageText: "normas por página:",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

    useMemo(() => {
        const newData = data.filter((row) => {
            return (
                row.titulo.toLowerCase().includes(search.toLocaleLowerCase()) ||
                row.numero
                    .toString()
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
            )
        })
        setRecords(newData)
        // }
    }, [search, data])

    return (
        <ConsultaContainer>
            <fieldset>
                <div className="legenda">
                    <legend>Consulta de NEB/T</legend>
                </div>
                <div className="tabela">
                    <div className="pesquisa">
                        <input
                            name="pesquisa"
                            type="text"
                            placeholder="Pesquisar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => setSearch("")}>x</button>
                    </div>
                    <DataTable
                        columns={columns} // seta as colunas
                        data={records} // recebe os dados
                        theme="solarized" // define o tema
                        customStyles={customStyles} // define estilos personalizados
                        progressPending={pending} // ativa o carregamento dos dados
                        progressComponent={<Loading />} // define mensagem para carregamento
                        paginationComponentOptions={paginationComponentOptions} // define opções de paginação
                        pagination // inclui a paginação
                        fixedHeader={true} // fixa o cabeçalho
                        fixedHeaderScrollHeight="40vh" // inclui uma barra de rolagem
                        defaultSortFieldId={2} // define a coluna do título com padrão no carregamento da página
                        highlightOnHover // ativa o hover sobre as linhas
                        dense // reduz a altura do cabeçalho
                        expandableRows // habilita a expansão de linhas
                        expandableRowsComponent={ExpandedComponent}
                        expandOnRowClicked
                        noDataComponent={<NoData />}
                        expandableIcon={{
                            collapsed: <img src={SignPlus} alt="mais" className="mais" />,
                            expanded: <img src={SignDash} alt="menos" className="mais" />,
                        }}
                    />
                </div>
            </fieldset>
        </ConsultaContainer>
    )
}
