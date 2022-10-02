import MDEditor, { commands } from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import { saveTranslate } from '../../api';
import store from '../../store/configStore';
export default function Editor() {
    const [content, setContent] = useState("")
    const save = {
        name: 'save',
        keyCommand: 'save',
        buttonProps: { 'aria-label': 'save' },
        icon: (
            <svg viewBox="0 0 20 20" width="20" height="20">
                <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
            </svg>
        ),
        execute: (state, api) => {
            const id = store.getState().id
            saveTranslate(state.text, id)
            .then((res) => {
                console.log(res);
            })
        },
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <MDEditor
                value={content}
                onChange={setContent}
                height="700px"
                commands={[
                    save
                ]}
            />
        </div>
    )
}