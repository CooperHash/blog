import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';
import { getTalk } from '../../api';
import { saveTalk, saveCode } from '../../api';
export default function Handler() {
    const [option, setOption] = useState({})
    useEffect(() => {
        const set = new Set()
        const map = new Map()
        getTalk()
            .then((res) => {
                const nameList = res.data.data
                nameList.map(item => {
                    console.log('item', item.name);
                    set.add(item.name)
                    if (!map.has(item.name)) {
                        map.set(item.name, 1)
                    } else {
                        let much = map.get(item.name)
                        console.log('much', much);
                        map.set(item.name, much + 1)
                    }
                    console.log('map', map);
                })
                setOption({
                    title: { text: '耳语' },
                    tooltip: {},
                    legend: {
                        data: ['数量']
                    },
                    xAxis: {
                        data: Array.from(set)
                    },
                    yAxis: {},
                    series: [{
                        name: '数量',
                        type: 'bar',
                        data: Array.from(map.values())
                    }]
                })
            })
    }, [])

    const talk = () => {
        const name = document.getElementsByClassName('name')[0].value
        const content = document.getElementsByClassName('content')[0].value
        console.log(name);
        saveTalk(name, content)
            .then((res) => {
                console.log(res);
            })
    }

    const code = () => {
        const info = document.getElementsByClassName('info')[0].value
        const tag = document.getElementsByClassName('tag')[0].value
        console.log(tag);
        saveCode("", info, tag)
            .then((res) => {
                console.log(res);
            })
    }
    return (
        <div className='mt-8 flex flex-row'>
            <div className='w-200'>
                {Object.keys(option) && <div>
                    <ReactECharts
                        option={option}
                        style={{ height: 200 }}
                        opts={{ renderer: 'svg' }}
                    />
                    <div className='mx-auto w-100'>
                        <input placeholder='name' className='border-1px name' />
                        <input placeholder='content' className='border-1px content' />
                        <button className='bg-blue-300' onClick={talk}>add</button>
                    </div>
                </div>}
            </div>
            <div className='w-600px text-3xl flex flex-col'>
                <p>有意思的题目</p>
                <div className='flex flex-row'>
                    <textarea placeholder='info' className='info border-2px border-dark-100 w-400px h-200px' />
                    <div className='flex flex-col'>
                        <button className='w-100px h-160px bg-red-300' onClick={code}>提交</button>
                        <input placeholder='tag' className='tag w-100px text-base h-40px border-2px' />
                    </div>
                </div>
            </div>
        </div>
    )
}