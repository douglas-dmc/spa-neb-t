import { Msg } from "./MessageStyled"
import { useState, useEffect } from "react"
import PropType from "prop-types"

export function Message({ type, msg }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <Msg $mode={type}>
                    {type === "success" && <i className="bi bi-check-lg"></i>}
                    {type === "error" && <i className="bi bi-x-circle"></i>}
                    {msg}
                </Msg>
            )}
        </>
    )
}

Message.PropType = {
    type: PropType.string,
    msg: PropType.string,
}
