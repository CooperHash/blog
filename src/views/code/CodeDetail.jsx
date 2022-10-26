import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { getSingleCode } from "../../api";
import { setCode } from "../../store/actions/actions";
import store from "../../store/configStore";
export default function CodeList() {
    const [value, setValue] = useState("")
    const [tag, setTag] = useState("")
    const [info, setInfo] = useState("")
    const [language, setLanguage] = useState({
        id: 63,
        name: "JavaScript (Node.js 12.14.0)",
        label: "JavaScript (Node.js 12.14.0)",
        value: "javascript",
    });

    useEffect(() => {
        getSingleCode(store.getState().id)
            .then((res) => {
                setValue(res.data.data[0].code)
                setTag(res.data.data[0].tag)
                setInfo(res.data.data[0].info)
            })
    }, [value])


    const toCode = () => {
        const payload = {
            code: value,
            tag: tag,
            info: info
        }
        store.dispatch(setCode(payload))
    }
    return (
        <div className="w-1000px mx-auto">
            <Editor
                className="pointer-events-none overflow-scroll"
                height="80vh"
                width={`100%`}
                options={{
                    fontSize: '18px',
                }}
                theme="vs-dark"
                language={language.value}
                value={value}
            />
            <div>
                <a href="/code" onClick={toCode}>try</a>
            </div>
        </div>
    )
}