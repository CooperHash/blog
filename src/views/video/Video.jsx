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
        <div className="grid grid-cols-4 gap-x-2 max-w-5xl mx-auto mt-10">
            {/* <VideoCard 
                img="https://cdn.homeblog.top/korea/iu-tv-shine.webp&video"
                info="[IU's Palette] This year's F/W is all about 2am Ballad! (With 2am) Ep.10"
            /> */}
            {videoList.map(i => (<div key={i.vid} onClick={() => {
                store.dispatch(setUid(i.vid))
                store.dispatch(setPerson(i.vguy))
            }}>
                <VideoCard img={i.vimage} info={i.vname} />
            </div>))}
        </div>
    )
}