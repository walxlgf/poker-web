

import React, { useState, useEffect } from 'react'
import '../../styles/offline-page.scss';


export default () => {
    return (
        <div className='s-list-result s-list-box' >
            <h1>赛程表</h1>
            <SelectView />
            <EventList datas={[1, 2, 3]} />
        </div>
    )
}


export const SelectView = ({ datas }) => {
    return (
        <div className='s-select-box'>
            <SelectItem datas={['A', 'B', 'C', 'D']} />
            <div className='s-select-item'>
                <input className='s-sel-time' placeholder='选择比赛'></input>
                <span></span>
            </div>
            <p>下载完整赛程表</p>
        </div>
    )
}


export const SelectItem = ({ datas }) => {
    const [isFocus, setIsFocus] = useState(false);
    const [selectText, setSelectText] = useState('');
    return (
        <div className='s-select-item'>
            <input
                className='s-sel-event'
                placeholder='选择赛事'
                readOnly
                value={selectText}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setTimeout(() => { setIsFocus(false) }, 10)}
            />
            <span></span>
            <ul style={{ display: isFocus ? 'block' : 'none' }}>
                {
                    datas.map((d, i) => {
                        return <li onClick={() => setSelectText(d)} key={i}>{d}</li>
                    })
                }
            </ul>
        </div>
    )
}


const EventList = ({ datas }) => {
    const [selectFlags, setSelectFlags] = useState(datas.map((_, i) => i === 0 ? true : false))
    let active = { height: '240px', transition: 'all 0.2s' };
    let unActive = { height: '0', transition: 'all 0.2s' };
    return (
        <ul className='s-list'>
            {
                datas.map((data, index) => {
                    return (
                        <li key={index}
                            style={selectFlags[index] ? { borderBottom: 'none' } : {}}
                        >
                            <div
                                className='s-list-header'
                                onClick={() => {
                                    selectFlags[index] = !selectFlags[index];
                                    setSelectFlags([...selectFlags]);
                                }}>
                                <p>30 Nov 2017(星期五)</p>
                                <i></i>
                            </div>
                            <ul style={selectFlags[index] ? active : unActive}>
                                <li>
                                    <p>开始时间</p>
                                    <p>编号</p>
                                    <p>赛事名称</p>
                                    <p>等级</p>
                                    <p>买入</p>
                                    <p>起始筹码</p>
                                </li>
                                <li>
                                    <p>12:00</p>
                                    <p>1</p>
                                    <p>红龙杯-无限德州扑克</p>
                                    <p>Day1</p>
                                    <p>250，000，00</p>
                                    <p>-</p>
                                </li>
                                <li>
                                    <p>12:00</p>
                                    <p>1</p>
                                    <p>红龙杯-无限德州扑克</p>
                                    <p>Day1</p>
                                    <p>250，000，00</p>
                                    <p>-</p>
                                </li>
                                <li>
                                    <p>12:00</p>
                                    <p>1</p>
                                    <p>红龙杯-无限德州扑克</p>
                                    <p>Day1</p>
                                    <p>250，000，00</p>
                                    <p>-</p>
                                </li>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}