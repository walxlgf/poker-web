import React, { useState, useEffect } from 'react'
import '../../styles/common.scss'

export default ({ datas, value, placeholder, select }) => {

    const [isFocus, setIsFocus] = useState(false);
    const [selectText, setSelectText] = useState('');
    const selectAction = (text) => {
        setSelectText(text);
        select && select(text);
    }

    useEffect(() => {
        setSelectText(value);
    }, [value])

    return (
        <div className='s-select-item'>
            <input
                className='s-sel-event'
                placeholder={placeholder}
                readOnly
                value={selectText}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setTimeout(() => { setIsFocus(false) }, 10)}
            />
            <span></span>
            <ul style={{ display: isFocus ? 'block' : 'none' }}>
                {
                    datas.map((d, i) => {
                        let className = d === selectText ? 'active' : '';
                        return <li className={className} onClick={() => selectAction(d)} key={i}>{d}</li>
                    })
                }
            </ul>
        </div>
    )
}
