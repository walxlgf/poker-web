import React, { useState, useEffect } from 'react'
import '../styles/common.scss'


const E_NAMES = ['赛事简介', '赛程表', '赛事结果', '赛事直播'];
const E_ICONS = [
    { name: require('../img/tab-summary.svg'), w: '42.5px', h: '45.5' },
    { name: require('../img/tab-list.svg'), w: '45px', h: '41' },
    { name: require('../img/tab-result.svg'), w: '34.4px', h: '48' },
    { name: require('../img/tab-video.svg'), w: '46px', h: '46' },
];

const B_NAMES = ['新聞', '視頻', '相冊', '實時報導'];
const B_ICONS = [
    { name: require('../img/tab-news.svg'), w: '48px', h: '42' },
    { name: require('../img/tab-video.svg'), w: '46px', h: '46' },
    { name: require('../img/tab-photo.svg'), w: '42px', h: '42' },
    { name: require('../img/tab-port.svg'), w: '43px', h: '40' },
];

export default (props) => {

    const ICONS = props.type === 'blog' ? B_ICONS : E_ICONS;
    const NAMES = props.type === 'blog' ? B_NAMES : E_NAMES;

    const [currentTabIndex, setCurrentTabIndex] = useState(-1);
    const [activeIndexs, setActiveIndexs] = useState([currentTabIndex])

    useEffect(() => {
        if (!props.activeTab) return;
        _tabChange(props.activeTab.index)
    }, [props.activeTab])

    const _tabChange = (index) => {
        if (currentTabIndex === index) return;
        props.tabChange && props.tabChange(index);
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
                        <a key={i} onClick={() => _tabChange(i)}
                            className={`s-tab-item ${currentTabIndex === i ? 'isActive' : ''}`}>
                            <img src={icon.name} style={{ width: icon.w, height: icon.h }}></img>
                            <p>{NAMES[i]}</p>
                        </a>
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
