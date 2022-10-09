import { useState } from "react"
export default function Picwall() {
    const [picList, setPicList] = useState([])
    const add = (file) => {
        console.log(file)
    }
    return (
        <div>
            {picList.length > 0 ?
                picList.map(i => {
                    <div key={i.id} className="flex">
                        <div>{i.position}</div>
                        <img src={i.img} />
                    </div>
                })
                : <div>no data opps</div>
            }
            <div className="absolute mb-10">
                <input type="file" accept="image/*" capture="camera" id="file-input" onChange={e => add(e.target.files)} />
            </div>
        </div>
    )
}