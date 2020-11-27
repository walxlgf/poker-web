import React, { useState, useEffect, memo, useMemo } from 'react'
import '../styles/common.scss'

export default (props) => {
    const { names, icons } = props;
    const [activeTabIndex, setActiveTabIndex] = useState(1)
    return (
        <div>
            <div className='s-tabs'>
                {
                    icons.map((icon, i) => {
                        return (
                            <div key={i} onClick={() => setActiveTabIndex(i)}
                                className={`s-tab-item ${activeTabIndex === i ? 'isActive' : ''}`}>
                                <img src={icon}></img>
                                <p>{names[i]}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                props.children.map((Componment, index) => {
                    return (
                        <div key={index} style={{ display: index === activeTabIndex ? 'block' : 'none' }}>
                            {Componment}
                        </div>
                    )
                })
            }
        </div>
    )
}
