import React, { useState, useEffect } from "react"
import { Months } from '../../util/consts'
import '../../styles/index-page.scss'
import Bus, { EVENTS } from '../../util/eventBus.js'
import "animate.css";
import { CommonButton } from '../../util/util'

const STATES = {
    '1': {
        text: '已經結束',
        icon: require('../../img/overIcon.png'),
        w: '25px',
        h: '22px'
    },
    '2': {
        text: '即將開始',
        icon: require('../../img/alertIcon.png'),
        w: '22px',
        h: '21px'
    },
    '3': {
        text: '敬請期待',
        icon: require('../../img/starIcon.png'),
        w: '22px',
        h: '21px'
    }
}

export default ({ data }) => {

    const [isShow, setIsShow] = useState(true)
    useEffect(() => {
        Bus.addListener(EVENTS.bgAnimationView, (index) => {
            if (index != 2) return; // 监听第三个色块的出现
            setIsShow(true);
        });
    }, [])

    const _formatDate = (startTime, endTime) => {
        const __format = (dateStr) => {
            let date = new Date(dateStr);
            let day = date.getDate();
            if (day < 10) day = '0' + day;
            let year = date.getFullYear() + '';
            year = year.substring(2);
            return { y: year, m: Months[date.getMonth()], d: day }
        }
        let s = __format(startTime);
        let e = __format(endTime);
        if (s.y == e.y && s.m == e.m) {
            return `${s.d}-${e.d} ${s.m} ${s.y}`
        }
        return `${s.d} ${s.m} ${s.y} - ${e.d} ${e.m} ${e.y}`
    }

    const _renderItem = (event, isTop) => {
        let bgColor = isTop ? '#db2c2d' : '#b52222';
        let marginTop = isTop ? 0 : '40px';
        let state = STATES[event.state];
        return (
            <div className={`o-itemContainer`} style={{ backgroundColor: bgColor, marginTop: marginTop }}>
                <div className='o-state' >
                    <div className='o-stateLeft'>
                        <img style={{ width: state.w, height: state.h }} src={state.icon}></img>
                        <span >{state.text}</span>
                    </div>
                    <div className='o-stateRight'>
                        <span>{event.attention}</span>
                        <img src={require('../../img/eye.png')}></img>
                    </div>
                </div>
                <p className='o-title'>{event.name}<br></br>{event.subName}</p>
                <p className='o-line' />
                <p className="o-date">
                    <img src={require('../../img/calendar.png')}></img>
                    <span>{_formatDate(event.startTime, event.endTime)}</span>
                </p>
                <p className='o-location'>
                    <img src={require('../../img/location.png')}></img>
                    <span >{event.address}</span>
                </p>
                <CommonButton
                    text='查看詳情'
                    style={{ position: 'absolute', bottom: '20px', borderColor: 'rgba(0,0,0,0.6)', left: '15px' }} />
            </div>
        )
    }

    if (!data) return;
    const { title, year, events } = data;
    if (!events || events.length == 0) return null;

    return (
        <div className='thisYearSeries' >
            <div className={`o-content animate__animated ${isShow ? 'animate__fadeIn' : ''}`}>
                <div className='o-header'>
                    <h3><span>{year}</span>{title}</h3>
                </div>
                <ul>
                    {events.map((e, i) => { return <li key={i}>{_renderItem(e, i % 2 == 0)}</li> })}
                </ul>
                <CommonButton text='閱讀緊多' style={{ margin: '80px auto', borderColor: 'rgba(255,255,255,0.6)' }} />
            </div>
        </div >
    )
}