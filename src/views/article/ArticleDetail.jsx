import Preview from "../../components/markdown/Preview";
import { getSingleStandard } from "../../api";
import { useEffect, useState } from "react";
import store from "../../store/configStore";
export default function ArticleDetail() {
    const [source, setSource] = useState('')
    useEffect(() => {
        getSingleStandard(store.getState().id)
            .then((res) => {
                console.log(res.data.data[0]);
                setSource(res.data.data[0].content)
            }).catch((err) => {
                console.log(err);
            })
    }, [source])
    return (
        <div>
            <Preview source={source}></Preview>
        </div>
    )
}