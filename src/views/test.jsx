import { useEffect } from "react"
import Button from "../components/button/Button"
import store from "../store/configStore"
import { click } from '@/store/actions/actions'
export default function Test() {
    return (
        <div className="absolute left-200px top-200px">
            <Button onClick={() => store.dispatch(click())}/>
        </div>
    )
}