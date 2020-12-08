

import React, { useState, memo, useEffect } from 'react'
import '../../styles/offline-page.scss';
import { Weeks, Months, Categories } from '../../util/consts'
import { formatMoney } from '../../util/util';
import SelectItem from './SelectItem'

export default memo(({ series, category }) => {

    const [curCategory, setCurCategory] = useState(category);
    const [curTime, setCurTime] = useState('');
    const [times, setTimes] = useState([]);
    const [groupEvents, setGroupEvents] = useState([]);

    // 根据选择的category过滤数据
    useEffect(() => {
        let categorySeries = []
        for (let index = 0; index < series.length; index++) {
            const serie = series[index];
            if (serie.category === curCategory) {
                categorySeries.push(serie);
            }
        }
        let { groupEvents, times } = _handleEvent(categorySeries);
        setGroupEvents(groupEvents);
        setTimes(times);
    }, [curCategory, curTime])

    // 将series中的所有event按照指定格式处理后返回
    // 返回格式：groupEvents： [{date:'9 Nov 2019(星期六), events:[...]}, ...]
    //         times :       ['9 Nov 2019(星期六)',...]
    const _handleEvent = (categorySeries) => {
        let events = [];
        for (let index = 0; index < categorySeries.length; index++) {
            const serie = categorySeries[index];
            for (let j = 0; j < serie.events.length; j++) {
                const event = serie.events[j];
                events.push(event);
            }
        }

        events.sort((e1, e2) => new Date(e1.startTime) - new Date(e2.startTime));

        let groupEvents = [];
        let times = [];
        for (let index = 0; index < events.length; index++) {
            const event = events[index];
            let startDate = new Date(event.startTime);
            let year = startDate.getFullYear();
            let month = Months[startDate.getMonth()]//获取月，从0 - 11
            let date = startDate.getDate();//获取日
            let weekend = startDate.getDay(); //获取星期几，这里获得到的是数字1-7
            let day = Weeks[weekend];
            let dateStr = `${date} ${month} ${year}(${day})`;

            if (times.length) {
                let lastTime = times[times.length - 1];
                if (lastTime !== dateStr) times.push(dateStr);
            } else {
                times.push(dateStr);
            }

            if (groupEvents.length > 0) {
                let lastItem = groupEvents[groupEvents.length - 1];
                if (lastItem.date === dateStr) {
                    lastItem.events.push(event);
                } else {
                    if (!curTime.length || curTime === dateStr) {
                        groupEvents.push({ date: dateStr, events: [event] })
                    }
                }
            } else {
                if (!curTime.length || curTime === dateStr) {
                    groupEvents.push({ date: dateStr, events: [event] })
                }
            }
        }
        return { groupEvents, times };
    }

    return (
        <div className='s-list-result s-list-box' >
            <h1>赛程表</h1>
            <div className='s-select-box'>
                <SelectItem placeholder='选择赛事' value={category} datas={Categories} select={(c) => {
                    if (c === curCategory) return;
                    setCurCategory(c);
                    setCurTime('');
                }} />
                <SelectItem placeholder='选择比赛时间' value={curTime} datas={times} select={t => setCurTime(t)} />
                <p>下载完整赛程表</p>
            </div>
            <EventList datas={groupEvents} />
        </div>
    )
})

const EventList = ({ datas }) => {
    if (datas.length == 0) return null;
    const [selectFlags, setSelectFlags] = useState([]);

    const _handleTime = (time) => {
        let date = new Date(time);
        let hour = date.getHours();
        let min = date.getMinutes();
        return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min} `
    }

    useEffect(() => {
        let selectFlags = datas.map((_, i) => i === 0 ? true : false);
        setSelectFlags(selectFlags);
    }, [datas])

    return (
        <ul className='s-list'>
            {
                datas.map((data, index) => {
                    return (
                        <li key={index}
                            style={selectFlags[index] ? { borderBottom: 'none' } : {}} >
                            <div
                                className='s-list-header'
                                onClick={() => {
                                    selectFlags[index] = !selectFlags[index];
                                    setSelectFlags([...selectFlags]);
                                }}>
                                <p>{data.date}</p>
                                <i></i>
                            </div>
                            <ul style={{ height: selectFlags[index] ? `${(data.events.length + 1) * 60}px` : 0, transition: 'all 0.2s' }}>
                                <li>
                                    <p>开始时间</p>
                                    <p>编号</p>
                                    <p>赛事名称</p>
                                    <p>买入</p>
                                    <p>起始筹码</p>
                                    <i className='triangle-down'></i>
                                </li>
                                {
                                    data.events.map((e, i) => {
                                        let showSep = i !== data.events.length - 1;
                                        return (
                                            <li key={e.no}>
                                                <p>{_handleTime(e.startTime)}</p>
                                                <p>{e.no}</p>
                                                <p>{e.title}</p>
                                                <p>{formatMoney(e.buyin)}</p>
                                                <p>{formatMoney(e.startingChips)}</p>
                                                <div style={{ display: showSep ? 'block' : 'none' }} className='s-list-seperator' />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}