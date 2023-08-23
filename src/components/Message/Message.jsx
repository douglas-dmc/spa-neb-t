import { Msg } from "./MessageStyled"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export function Message(props) {
    const { type, msg } = props
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = () =>
            setTimeout(() => {
                setVisible(false)
            }, 5000)

        return () => clearTimeout(timer)
    }, [msg])

    return <>{visible && <Msg $mode={type}>{msg}</Msg>}</>
}

Message.prototype = {
    type: PropTypes.string,
    msg: PropTypes.string,
}
