import { useEffect, useState } from "react"
import { getTalk, getSingleTalk } from "../../api"
import store from "../../store/configStore"
import { setUid } from "../../store/actions/actions"
export default function Talk() {
    const [list, setList] = useState([])
    useEffect(() => {
        getTalk()
            .then((res) => {
                setList(res.data.data)
            })
    }, [])


    const getTalkDetail = (id) => {
        store.dispatch(setUid(id))
    }


    return (
        <div className="w-bar mx-auto mt-10">
            {list.map(i =>
                <div key={i.id} className="w-120 mt-10 mx-auto">
                    <div>{i.name}</div>
                    <div className="flex">
                        <div className="mt-5 line-clamp-sm">{i.content}</div>
                        <a href="/talk-detail" className="flex items-end text-sky-300 hover:text-sky-500" onClick={() => getTalkDetail(i.id)}>More</a>
                    </div>
                </div>)}
        </div>
    )
}