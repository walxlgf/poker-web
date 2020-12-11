import React, { useState } from 'react'
import '../styles/common.scss'

export default (props) => {
    const { names, icons } = props;
    const [currentTabIndex, setCurrentTabIndex] = useState(1);
    const [activeIndexs, setActiveIndexs] = useState([currentTabIndex])

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
                {icons.map((icon, i) => {
                    return (
                        <div key={i} onClick={() => _tabChange(i)}
                            className={`s-tab-item ${currentTabIndex === i ? 'isActive' : ''}`}>
                            <img src={icon}></img>
                            <p>{names[i]}</p>
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
