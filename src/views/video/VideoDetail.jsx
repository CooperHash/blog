import { useEffect } from "react"
import store from "../../store/configStore"
import { getSingleVideo, getPerson } from "../../api"
import { useState } from "react"
export default function VideoDetail() {
    const [video, setVideo] = useState([])
    const [person, setPerson] = useState([])
    useEffect(() => {
        const person = store.getState().person
        getSingleVideo(store.getState().id)
            .then((res) => {
                if (res) setVideo(res.data[0])
            })
        getPerson(person)
            .then((res) => {
                console.log(res.data.data[0]);
                setPerson(res.data.data[0])
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto flex mt-10">
            <div className="">
                <video
                    controls
                    src={video.vurl}
                    width="950"
                    height="534"
                />
            </div>
            <div className="flex flex-1 justify-end">
                <div className="bg-gray-200 w-300px h-185px">
                    <div className="w-bar h-auto border-b-2 border-gray-300 mx-auto">
                        <div className="flex">
                            <img src={person.img} className="w-40px h-40px rounded-cycle" />
                            <div>
                                <div className="text-base">{person.name}</div>
                                <div className="overflow-ellipsis text-xs">{person.info}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}