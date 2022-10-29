import { useEffect, useState } from "react"
import { getCode } from "../../api"
import { setUid } from "../../store/actions/actions"
import store from "../../store/configStore"
import uuid from 'react-uuid'
export default function CodeProblem() {
    const [list, setList] = useState([])
    useEffect(() => {
        getCode()
            .then((res) => {
                console.log(res.data.data)
                setList(res.data.data)
            })
    }, [])
    const toCode = (id) => {
        console.log(id);
        store.dispatch(setUid(id))
    }
    return (
        <div className="w-1000px mx-auto mt-10">
            {list && list.map(i => <div key={i.id}>
                <div className="font-medium text-xl flex flex-row">
                    {i.code ? <a href="/codeproblem/:id" className="hover:text-blue-500" onClick={() => { toCode(i.id) }}>{i.code.substring(0, 52) + '...'}</a>
                        : <a href="/codeproblem/:id" className="hover:text-blue-500" onClick={() => { toCode(i.id) }}>{i.info.substring(0,52) + '...'}</a>}
                    <div className="ml-3 flex flex-row">
                        {i.tag.split(',').map(item => <div key={uuid()}>
                            <button className="w-60px h-25px bg-red-500 text-sm mr-2">{item}</button>
                        </div>)}
                    </div>
                </div>
            </div>)}
        </div>
    )
}