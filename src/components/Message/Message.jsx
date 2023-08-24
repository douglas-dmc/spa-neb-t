import { Msg } from "./MessageStyled"
import { useState, useEffect } from "react"
import PropType from "prop-types"

export function Message({ type, msg }) {
    const [visible, setVisible] = useState(false)
    console.log({type, msg})

    useEffect(() => {

        if (!msg) {
            setVisible(false)
            return
        }
        
        setVisible(true)

        const timer = setTimeout(() => {
                setVisible(false)
            }, 6000)

        return () => clearTimeout(timer)

    }, [msg])

    return <>{visible && <Msg $mode={type}>{msg}</Msg>}</>
}

Message.PropType = {
    type: PropType.string.isRequired,
    msg: PropType.string,
}
