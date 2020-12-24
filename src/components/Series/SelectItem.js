import React, { useState, useEffect, useRef } from 'react'
import '../../styles/common.scss'

export default ({ datas, value, placeholder, select }) => {

    const [isFocus, setIsFocus] = useState(false);
    const [selectText, setSelectText] = useState('');
    const inputRef = useRef(null)

    useEffect(() => {
        setSelectText(value);
    }, [value])

    const selectAction = (text) => {
        setSelectText(text);
        select && select(text);
    }

    const toggleFocusState = () => {
        if (isFocus) {
            inputRef.current.blur()
        } else {
            inputRef.current.focus()
        }
    }

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
            <a onClick={toggleFocusState} className='indicator'><i></i></a>
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
