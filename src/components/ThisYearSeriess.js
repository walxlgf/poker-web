import React from "react"
import { Link } from 'gatsby'
import { Months } from '../util/consts'
import '../styles/index-page.scss'


export default ({ data }) => {

    if (!data) return;
    const { title, year, events } = data.frontmatter.thisYearSeries;
    if (!events || events.length == 0) return null;

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
        return (
            <div className='o-itemContainer' style={{ backgroundColor: bgColor, marginTop: marginTop }}>
                <div className='o-state' >
                    <div className='o-stateLeft'>
                        <img src={require('../img/overIcon.png')}></img>
                        <span >{event.state}</span>
                    </div>
                    <div className='o-stateRight'>
                        <span>{event.attention}</span>
                        <img src={require('../img/eye.png')}></img>
                    </div>
                </div>
                <p className='o-title'>{event.name}<br></br>{event.subName}</p>
                <p className='o-line' />
                <p className="o-date">
                    <img src={require('../img/calendar.png')}></img>
                    <span>{_formatDate(event.startTime, event.endTime)}</span>
                </p>
                <p className='o-location'>
                    <img src={require('../img/location.png')}></img>
                    <span >{event.address}</span>
                </p>
                <div className='o-detail'>查看詳情</div>
            </div>
        )
    }

    return (
        <div className='thisYearSeries' >
            <div className='o-content' >
                <div className='o-header'>
                    <h3><span>{year}</span>{title}</h3>
                </div>
                <ul >
                    {events.map((e, i) => { return <li key={i}>{_renderItem(e, i % 2 == 0)}</li> })}
                </ul>
                <div className='o-more'>閱讀緊多</div>
            </div>
        </div >
    )
}