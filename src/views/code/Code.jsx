import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Base64 } from "js-base64";
import {
  REACT_APP_RAPID_API_HOST,
  REACT_APP_RAPID_API_KEY,
  REACT_APP_RAPID_API_URL
} from "./const";
import store from "../../store/configStore";
import { updateCode } from "../../api";
export default function Code() {
  const [language, setLanguage] = useState({
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  });
  const [info, setInfo] = useState("")
  const [value, setValue] = useState("" || `js`);
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState("");
  const [output, SetOutPut] = useState("")

  useEffect(() => {
    const data = store.getState().code
    console.log(data);
    const str = data.code ? data.code : 'js'
    console.log(str);
    setValue(str)
    setInfo(data.info)
  }, [])

  const handleCompile = () => {
    let source_code = ""
    source_code = code ? code : value
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: Base64.encode(source_code),
      stdin: Base64.decode(customInput),
    };
    const options = {
      method: "POST",
      url: REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log(error);
      });
  };


  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      console.log(response);
      // Processed - we have a result
      if (statusId === 11) {
        SetOutPut(Base64.encode('run time error'))
        return
      }
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        console.log('response.data', JSON.stringify(Base64.decode(response.data.stdout)))
        SetOutPut(response.data.stdout)
        return
      }
    } catch (err) {
      console.log("err", err);
    }
  };


  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };


  const save = () => {
    const id = store.getState().id
    updateCode(value, id)
      .then((res) => {
        console.log(res);
      })
  }


  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl flex flex-row">
      <p className="w-180px text-lg ml-20 mt-8 mr-20">
        { info }
      </p>
      <div className="mt-8 w-1000px  flex flex-row">
        <div className="w-full">
          <Editor
            height="80vh"
            width={`100%`}
            options={{
              fontSize: '18px',
            }}
            theme="vs-dark"
            language={language.value}
            value={value}
            defaultValue="// some comment"
            onChange={handleEditorChange}
          />
        </div>
        <div className="w-200px flex flex-col mx-auto h-80vh bg-gray-50">
          <div className="flex w-200px h-80px flex-col">
            <button className="w-80px bg-blue-600 rounded-md text-stroke-${var}" onClick={() => handleCompile()}>compile</button>
            <button className="bg-blue-600 w-80px h-30px mt-2 rounded-md" onClick={() => handleCompile()}>reset</button>
            <button className="bg-blue-600 w-80px h-30px mt-2 rounded-md" onClick={save}>save</button>
          </div>
          <div className="flex-1 px-2 overflow-hidden mt-2">
            {output && <div className="whitespace-pre-wrap text-lg">{`> ${Base64.decode(output)}`
            }</div>}
          </div>
        </div>
      </div>
    </div>
  );
}