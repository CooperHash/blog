import { useEffect } from "react"
import Button from "../components/button/Button"
import store from "../store/configStore"
export default function Test() {
    useEffect(() => {
        store.dispatch('BUTTON_CLICK')
    })
    return (
        <div className="absolute left-200px top-200px">
            <Button/>
        </div>
    )
}