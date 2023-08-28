import { useEffect, useState } from "react"
import { ConsultaContainer } from "./ConsultaStyled"
import DataTable, { createTheme } from "react-data-table-component"

export function Consulta() {
    const columns = [
        {
            name: "Tipo",
            selector: (row) => row.tipo,
            width: "70px",
            center: true,
        },
        {
            name: "Número",
            selector: (row) => row.numero,
            width: "70px",
            sortable: true,
        },
        {
            name: "Edição",
            selector: (row) => row.edicao,
            width: "70px",
        },
        {
            name: "Titulo",
            selector: (row) => row.titulo,
            width: "350px",
        },
        {
            name: "Homologação",
            selector: (row) => row.be_data,
            width: "120px",
        },
        {
            name: "Status",
            selector: (row) => row.status,
            center: true,
        },
    ]

    const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/cadastros", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => console.log(error))
    }, [])

    createTheme(
        "solarized",
        {
            text: {
                primary: "#268bd2",
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
                default: "#5e5c5c",
            },
            action: {
                button: "#af1111",
                hover: "rgba(0,0,0,.08)",
                disabled: "rgba(0,0,0,.12)",
            },
        },
        "light"
    )

    const customStyles = {
        rows: {
            style: {
                minHeight: "35px", // override the row height
            },
        },
        headCells: {
            style: {
                minHeight: "20px",
                paddingLeft: "5px", // override the cell padding for head cells
                paddingRight: "5px",
            },
        },
        cells: {
            style: {
                paddingLeft: "6px", // override the cell padding for data cells
                paddingRight: "6px",
            },
        },
    }

    return (
        <ConsultaContainer>
            <fieldset>
                <div className="legenda">
                    <legend>Consulta de NEB/T</legend>
                </div>
                <div className="tabela">
                    <DataTable
                        columns={columns}
                        data={data}
                        theme="solarized"
                        customStyles={customStyles}
                        pagination
                    />
                </div>
            </fieldset>
        </ConsultaContainer>
    )
}
