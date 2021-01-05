import React, { useState, useEffect } from "react"
import { Months } from '../../util/consts'
import '../../styles/index-page.scss'
import Bus, { EVENTS } from '../../util/eventBus.js'
import "animate.css";
import { CommonButton } from '../../util/util'


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

    const _getSeriesState = (startTime) => {
        let date = new Date(startTime);
        if (date.getTime() > Date.now()) {
            return { text: '敬請期待', icon: require('../../img/starIcon.png'), w: '22px', h: '21px' }
        } else {
            return { text: '已經結束', icon: require('../../img/overIcon.png'), w: '25px', h: '22px' }
        }
        return { text: '即將開始', icon: require('../../img/alertIcon.png'), w: '22px', h: '21px' }
    }

    const _getSeriesTime = (series) => {
        let s_time = new Date(series.date).getTime();
        let e_time = s_time;
        for (let index = 0; index < series.events.length; index++) {
            const { startTime } = series.events[index];
            let time = new Date(startTime).getTime();
            if (time > e_time) e_time = time;
            if (time < s_time) s_time = time;
        }
        return {
            startTime: new Date(s_time).toISOString(),
            endTime: new Date(e_time).toISOString()
        }
    }

    const _getSeriesLocation = (series) => {
        let { category } = series;
        let obj = {
            'appt-jeju': { name: 'APPT济州站', address: '济州岛' },
            'rd-jeju': { name: '红龙杯济州站', address: '济州岛' },
            'rd-manila': { name: '红龙杯马尼拉站', address: '马尼拉' }
        };
        return obj[category];
    }

    const _renderItem = (series, isTop) => {
        let bgColor = isTop ? '#db2c2d' : '#b52222';
        let marginTop = isTop ? 0 : '40px';
        let { startTime, endTime } = _getSeriesTime(series)
        let state = _getSeriesState(startTime);
        let location = _getSeriesLocation(series)
        return (
            <div className={`o-itemContainer`} style={{ backgroundColor: bgColor, marginTop: marginTop }}>
                <div className='o-state' >
                    <div className='o-stateLeft'>
                        <img style={{ width: state.w, height: state.h }} src={state.icon}></img>
                        <span >{state.text}</span>
                    </div>
                    <div className='o-stateRight'>
                        <span>101</span>
                        <img src={require('../../img/eye.png')}></img>
                    </div>
                </div>
                <p className='o-title'>{series.title}<br></br><p>{location.name}</p></p>
                <p className='o-line' />
                <p className="o-date">
                    <img src={require('../../img/calendar.png')}></img>
                    <span>{_formatDate(startTime, endTime)}</span>
                </p>
                <p className='o-location'>
                    <img src={require('../../img/location.png')}></img>
                    <span >{location.address}</span>
                </p>
                <CommonButton
                    text='查看詳情'
                    style={{ position: 'absolute', bottom: '20px', borderColor: 'rgba(0,0,0,0.6)', left: '15px' }} />
            </div>
        )
    }

    if (!data.length) return;
    return (
        <div className='thisYearSeries' >
            <div className={`o-content animate__animated ${isShow ? 'animate__fadeIn' : ''}`}>
                <div className='o-header'>
                    <h3><span>2020</span>最新赛事表</h3>
                </div>
                <ul>
                    {data.map((s, i) => { return <li key={i}>{_renderItem(s, i % 2 == 0)}</li> })}
                </ul>
                <CommonButton text='閱讀緊多' style={{ margin: '80px auto', borderColor: 'rgba(255,255,255,0.6)' }} />
            </div>
        </div >
    )
}