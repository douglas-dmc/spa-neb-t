import { useState } from "react"
import { Document, Page } from "react-pdf"

export function DisplayPDF() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

    const goToNextPage = () =>
        setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)

    return (
        <div>
            <nav>
                <button onClick={goToPrevPage}>Anterior</button>
                <button onClick={goToNextPage}>Próximo</button>
                <p>
                    Página {pageNumber} de {numPages}
                </p>
            </nav>

            <Document
                file="E-327.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    )
}
