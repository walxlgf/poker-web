import React, { useState, useEffect } from 'react'
import '../styles/common.scss'


const NAMES = ['赛事简介', '赛程表', '赛事结果', '赛事直播'];
const ICONS = [
    { name: require('../img/tab-summary.svg'), w: '42.5px', h: '45.5' },
    { name: require('../img/tab-list.svg'), w: '45px', h: '41' },
    { name: require('../img/tab-result.svg'), w: '34.4px', h: '48' },
    { name: require('../img/tab-video.svg'), w: '46px', h: '46' },
]
export default (props) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(props.activeIndex || 0);
    const [activeIndexs, setActiveIndexs] = useState([currentTabIndex])

    useEffect(() => {
        _tabChange(props.activeTab.index)
    }, [props.activeTab])

    const _tabChange = (index) => {
        setCurrentTabIndex(index);
        if (!activeIndexs.includes(index)) {
            activeIndexs.push(index);
            setActiveIndexs([...activeIndexs]);
        }
    }

    return (
        <div>
            <div className='s-tabs'>
                {ICONS.map((icon, i) => {
                    return (
                        <div key={i} onClick={() => _tabChange(i)}
                            className={`s-tab-item ${currentTabIndex === i ? 'isActive' : ''}`}>
                            <img src={icon.name} style={{ width: icon.w, height: icon.h }}></img>
                            <p>{NAMES[i]}</p>
                        </div>
                    )
                })}
            </div>
            {
                props.children.map((Componment, index) => {
                    // tab不点击则当前tab不渲染
                    if (!activeIndexs.includes(index)) return null;
                    return (
                        <div key={index} style={{ display: index === currentTabIndex ? 'block' : 'none' }}>
                            {Componment}
                        </div>
                    )
                })
            }
        </div>
    )
}
