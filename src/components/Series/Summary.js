
import React, { useState } from 'react'
import { Months } from '../../util/consts'
import { formatMoney, CommonButton } from '../../util/util';

export default ({ category, series, detailAction }) => {

    let mainSeries = category.mains || [];
    let events = [];
    for (let i = 0; i < mainSeries.length; i++) {
        const mainSer = mainSeries[i];
        let targetSerie;
        for (let j = 0; j < series.length; j++) {
            const serie = series[j];
            if (mainSer.serieId === serie.objectId) {
                targetSerie = serie;
                break;
            }
        }
        if (!targetSerie) continue;
        for (let k = 0; k < targetSerie.events.length; k++) {
            const event = targetSerie.events[k];
            if (mainSer.eventIds.includes(event.objectId)) {
                events.push(event);
                if (events.length === mainSer.eventIds.lenght) break;
            }
        }
    }

    return (
        <div className='s-summary-box' >
            <h1>赛事简介</h1>
            <CategorySummary category={category} />
            <MainEvents category={category} events={events} detailAction={detailAction} />
            <div className='s-rdpt'>
                <div className='s-rdpt-content'>
                </div>
            </div>
            <DescList descs={category.descs} />
        </div>
    )
}

const CategorySummary = ({ category }) => {

    const _handleTime = (time) => {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = Months[date.getMonth()]//获取月，从0 - 11
        let day = date.getDate();//获取日
        day = day < 10 ? '0' + day : day;
        return `${day} ${month} ${year}`;
    }

    let others = category.others || '';
    others = others.split('|');
    return (
        <div className='s-category-summary'>
            <div className='left'>
                <h4>{category.title}</h4>
                <div className='image-text'>
                    <img style={{ width: '35px', height: '30px' }} src={require('../../img/summary-calendar.svg')}></img>
                    <p >{_handleTime(category.date)}</p>
                </div>
                {
                    category.prize ? (
                        <div className='image-text'>
                            <img style={{ width: '33px', height: '32px' }} src={require('../../img/summary-price.svg')}></img>
                            <p>{`${category.currency}  ${category.prize}`}</p>
                        </div>
                    ) : null
                }
                <div className='image-text'>
                    <img style={{ width: '29px', height: '33px' }} src={require('../../img/summary-location.svg')}></img>
                    <p>{category.address}</p>
                </div>
                {
                    others.map((text, index) => {
                        let sps = text.split(':');
                        if (sps.lenght == 1) sps = text.split('：');
                        return <p key={index}>{sps[0]}:&nbsp;&nbsp;&nbsp;{sps[1]}</p>
                    })
                }
            </div>
            <div className='right'>
                <img src={require('../../img/seriesPlaceholder.jpeg')} />
            </div>
        </div>
    )
}

const MainEvents = ({ events, category, detailAction }) => {

    events = events && events.slice(0, Math.min(4, events.length))

    const _handleTime = (time) => {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = Months[date.getMonth()]//获取月，从0 - 11
        let day = date.getDate();//获取日
        day = day < 10 ? '0' + day : day;
        return `${day} ${month} ${year}`;
    }

    if (events.length == 0) return null;
    return (
        <div className='s-main-events'>
            <h3>重點賽事</h3>
            <ul className='s-main-list'>
                <li>
                    <p>賽事名稱</p>
                    <p>賽事時間</p>
                    <p>{`買入(${category.currency})`}</p>
                    <p>{`保証金總獎池(${category.currency})`}</p>
                </li>
                {events.map((e, i) => {
                    return (
                        <li key={e.objectId}>
                            <p>{e.title}</p>
                            <p>{_handleTime(e.startTime)}</p>
                            <p>{formatMoney(e.buyin + e.adminFee + e.bounty)}</p>
                            <p>-</p>
                        </li>
                    )
                })}
            </ul>
            <CommonButton onClick={detailAction} text='查看更多賽程' style={{ margin: '50px auto' }} />
        </div>
    )
}

const DescList = ({ descs }) => {
    const [selectItems, setSelectItems] = useState([true]);
    if (!descs || descs.length == 0) return null;
    return (
        <ul className='s-desc-list'>
            {
                descs.map((desc, i) => {
                    let isExpand = selectItems[i];
                    return (
                        <li key={i}>
                            <div className='header'
                                style={isExpand ? { borderBottom: 'none' } : {}}
                                onClick={() => {
                                    selectItems[i] = !selectItems[i];
                                    setSelectItems([...selectItems]);
                                }}>
                                <div className='left'>
                                    <img src={require('../../img/location.png')}></img>
                                    <p>{desc.key}</p>
                                </div>
                                <i className={isExpand ? 'active' : ''}></i>
                                <b className='triangle-down' style={{ display: isExpand ? 'block' : 'none' }}></b>
                            </div>
                            <div className='desc' style={{ height: selectItems[i] ? 'auto' : '0px' }}>
                                <div className='inner'>
                                    {
                                        desc.values && desc.values.map((text, index) => {
                                            return (
                                                <div key={index}>
                                                    <p>{`${String.fromCharCode(97 + index)}.`}</p>
                                                    <p>{text}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
