import React, { useState, memo, useEffect } from 'react'
import '../../styles/offline-page.scss';
import SelectItem from './SelectItem'
import { formatMoney } from '../../util/util'


export default memo(({ series }) => {

    const [curSerie, setCurSerie] = useState(series && series[0]);
    const [curSelectEvent, setCurSelectEvent] = useState(curSerie.events[0]);
    const [curEvents, setCurEvents] = useState(curSerie.events);
    const [curPayouts, setCurPayouts] = useState(curSelectEvent.payouts);

    // 控制列表 显示 多少数据
    const [isShowMore, setIsShowMore] = useState(false);
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        setCurPayouts(curSelectEvent.payouts);
    }, [curSelectEvent])

    useEffect(() => {
        setIsShowMore(curPayouts.length > 10);
        setIsExpand(false);
    }, [curPayouts])

    const _expandAction = () => {
        setIsExpand(true);
        setIsShowMore(false);
    }

    return (
        <div className='s-list-result  s-result-box' >
            <h1>赛事结果</h1>
            <div className='s-select-box'>
                <SelectItem placeholder='选择系列' value={curSerie.title} datas={series.map(s => s.title)}
                    select={t => {
                        let serie = series.find(s => s.title === t);
                        if (serie === curSerie) return;
                        setCurSerie(serie);
                        setCurEvents(serie.events);
                        setCurSelectEvent(serie.events[0]);
                    }} />
                <SelectItem placeholder='选择赛事' value={curSelectEvent.title} datas={curEvents.map(e => e.title)}
                    select={t => {
                        let event = curEvents.find(e => e.title === t)
                        setCurSelectEvent(event);
                    }} />
                <p>下载完整赛程结果</p>
            </div>
            <List payouts={isExpand ? curPayouts : curPayouts.slice(0, Math.min(curPayouts.length, 10))} />
            <div className='s-more' onClick={_expandAction} style={{ display: isShowMore ? 'block' : 'none' }}>查看更多</div>
        </div>
    )
})

const List = ({ payouts }) => {

    payouts = payouts.sort((s1, s2) => s1.rank - s2.rank);
    return (
        <ul>
            <li className='header-item'>
                <p style={{ flex: 215 / 1200 }}>排名</p>
                <p style={{ flex: 379 / 1200 }}>获奖者</p>
                <p style={{ flex: 279 / 1200 }}>国家</p>
                <p style={{ flex: 319 / 1200 }}>奖金</p>
            </li>
            {
                payouts.map((payout, i) => {
                    let topThreeColor = i == 0 ? '#f7a929' : (i == 1 ? '#8a8c8e' : '#c06e4e');
                    let ranks = ['冠軍', '亞軍', '季軍'];
                    let isTopThree = payout.rank <= 3;
                    return (
                        <li className='other-item' key={i}>
                            <div className='rank' style={{ flex: 215 / 1200, }}>
                                <i style={{ backgroundColor: topThreeColor, display: isTopThree ? 'block' : 'none' }}></i>
                                <p className={`${isTopThree ? 'topThree' : ''}`}>{isTopThree ? ranks[payout.rank - 1] : payout.rank}</p>
                            </div >
                            <div className='name' style={{ flex: 379 / 1200 }}>
                                <img style={{ display: isTopThree ? 'block' : 'none' }}></img>
                                <p>{payout.name}</p>
                            </div>
                            <p style={{ flex: 279 / 1200 }}>{payout.nationality}</p>
                            <p style={{ flex: 319 / 1200 }}>{formatMoney(payout.amount)}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}