import MDEditor, { commands } from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import { saveTranslate, getSingleStandard } from '../../api';
import store from '../../store/configStore';
import { autosaveTranslate } from '@/store/actions/actions'
import { Document, Page } from 'react-pdf';
export default function Editor() {
    const [translate, setTranslate] = useState("")
    const [content, setContent] = useState("")
    

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    var timeout;
    (function () {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            store.dispatch(autosaveTranslate(translate))
        }, 6000)
    })()


    useEffect(() => {
        getSingleStandard(store.getState().id)
            .then((res) => {
                setTranslate(res.data.data[0].translate)
                setContent(res.data.data[0].content)
            })
    }, [])

    
    const save = () => {
        const text = document.getElementsByTagName('textarea')[0].value
        const id = store.getState().id
        saveTranslate(text, id)
            .then((res) => {
                console.log(res);
            })
    }



    return (
        <div className='max-w-7xl mx-auto mt-10 flex flex-row'>
            <MDEditor
                className='w-half'
                height={900}
                hideToolbar='true'
                preview='preview'
                value={content}
            />
            <div className='w-half'>
                <div className='h-10 w-all border-gray-200 border-solid border-1 border-bottom-0 flex items-center'>
                    <div className='ml-4 hover:bg-gray-200' onClick={save}>
                        <svg viewBox="0 0 20 20" width="25" height="25">
                            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                        </svg>
                    </div>
                </div>
                <div className='w-all border-1px'>
                    <textarea id='translate' defaultValue={translate} onBlur={e => setTranslate(e.target.value)} className='mx-2 w-628px h-820px border-0 focus:outline-transparent mt-2'> 
                    </textarea>
                </div>
            </div>
        </div>
    )
}