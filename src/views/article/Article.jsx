import { useState } from "react"
import { useEffect } from "react"
import { getStandard } from "../../api"
import Card from "../../components/Card/Card"
import store from "../../store/configStore"
import { setUid } from "../../store/actions/actions"
export default function Article() {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        getStandard()
            .then((res) => {
                setArticleList(res.data.data)
            })
    }, [])
    return (
        <div>
            {articleList.map(i => (<div key={i.id} onClick={() => 
                store.dispatch(setUid(i.id))
            }>
                <Card img={i.img} title={i.title} info={i.info} />
            </div>))}
        </div>
    )
}