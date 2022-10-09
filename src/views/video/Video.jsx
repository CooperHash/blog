import VideoCard from "../../components/Card/VideoCard";
import { getVideo } from '@/api/index'
import { useEffect } from "react";
import { useState } from "react";
import store from "../../store/configStore";
import { setUid, setPerson } from "../../store/actions/actions";
export default function Video() {
    const [videoList, setVideoList] = useState([])
    useEffect(() => {
        getVideo().then((res) => {
            console.log(res.data.data);
            setVideoList(res.data.data)
        })
    }, [])
    return (
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 max-w-5xl mx-auto mt-10">
            {videoList.map(i => (<div key={i.vid} onClick={() => {
                store.dispatch(setUid(i.vid))
                store.dispatch(setPerson(i.vguy))
            }}>
                <VideoCard img={i.vimage} info={i.vname} type={i.vtype}/>
            </div>))}
        </div>
    )
}