import { useEffect, useState } from "react"
import { ConsultaContainer } from "./ConsultaStyled"
import DataTable, { createTheme } from "react-data-table-component"

export function Consulta() {
    const columns = [
        {
            name: "tipo",
            selector: (row) => row.tipo,
        },
        {
            name: "numero",
            selector: (row) => row.numero,
            sortable: true,
        },
        {
            name: "edicao",
            selector: (row) => row.edicao,
        },
        {
            name: "titulo",
            selector: (row) => row.titulo,
        },
        {
            name: "status",
            selector: (row) => row.status,
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
                default: "#073642",
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
                minHeight: "25px", // override the row height
            },
        },
        headCells: {
            style: {
                minHeight: "30px",
                paddingLeft: "6px", // override the cell padding for head cells
                paddingRight: "6px",
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
                <div>
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
