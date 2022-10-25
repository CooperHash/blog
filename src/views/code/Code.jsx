import { useEffect, useState } from "react";
// import './Code.css'
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Base64 } from "js-base64";
import { REACT_APP_RAPID_API_HOST, REACT_APP_RAPID_API_KEY, REACT_APP_RAPID_API_URL } from "./const";
import { testRegexr } from "windicss/utils";
export default function Code() {
  const [language, setLanguage] = useState({
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  });
  const [value, setValue] = useState(`js` || "");
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState(`javascriptDefault`);
  const [output, SetOutPut] = useState("")

  const handleCompile = () => {
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: Base64.encode(code),
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     let span = document.getElementsByTagName('span')
  //     for(let i of span) {
  //       i.style.fontSize = '18px'
  //     }
  //   },400)
  // })


  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <div className="mt-8 w-1000px mx-auto flex flex-row">
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
        <div className="w-200px flex flex-col mx-auto h-90vh bg-gray-50">
          <div className="flex w-200px h-80px flex-col">
            <button className="w-80px bg-blue-600 rounded-md text-stroke-${var}" onClick={() => handleCompile()}>compile</button>
            <button className="bg-blue-600 w-80px h-30px mt-2 rounded-md" onClick={() => handleCompile()}>reset</button>
          </div>
          <div className="flex-1 px-2 overflow-hidden">
            {output && <div className="whitespace-pre-wrap text-lg">{`> ${Base64.decode(output)}`
            }</div>}
          </div>
        </div>
      </div>
    </div>
  );
}