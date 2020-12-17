import React, { useState, useEffect, useRef } from 'react'
import '../../styles/common.scss'

export default ({ datas, value, placeholder, select }) => {

    const [isFocus, setIsFocus] = useState(false);
    const [selectText, setSelectText] = useState('');
    const inputRef = useRef(null)
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
                ref={inputRef}
                placeholder={placeholder}
                readOnly
                value={selectText}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setTimeout(() => { setIsFocus(false) }, 10)}
            />
            <div onClick={() => inputRef.current.focus()} className='indicator'><i></i></div>
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
