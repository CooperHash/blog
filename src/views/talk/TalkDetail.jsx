import { useEffect, useState } from "react"
import store from "../../store/configStore"
import { getSingleTalk } from "../../api"
export default function TalkDetail() {
    const [list, setList] = useState([])
    useEffect(() => {
        getSingleTalk(store.getState().id)
            .then((res) => {
                setList(res.data.data[0])
            })
    },[])
    return (
        <div className="w-bar mx-auto">
            <div className="w-180 mx-auto">
                <div>{list.name}</div>
                <div className="mt-10">{list.content}</div>
            </div>
        </div>
    )
}