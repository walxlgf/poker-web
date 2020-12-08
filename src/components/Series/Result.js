import React, { useState, memo, useEffect } from 'react'
import '../../styles/offline-page.scss';
import { SelectItem } from './Schedule'
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
                <p>下载完整赛程表</p>
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
            <li><p>排名</p><p>获奖者</p><p>国家</p><p>奖金</p></li>
            {
                payouts.map((payout, i) => {
                    return (
                        <li key={i}>
                            <p>{payout.rank}</p>
                            <p>{payout.name}</p>
                            <p>{payout.nationality}</p>
                            <p>{formatMoney(payout.amount)}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}