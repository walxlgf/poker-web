

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

const liHeight = 60;
const EventList = ({ datas }) => {
    // 记录所有row是否被点击了，以及row的高度
    const [selectItems, setSelectItems] = useState([]);

    useEffect(() => {
        let selectItems = [];
        for (let index = 0; index < datas.length; index++) {
            let subItems = [];
            for (let j = 0; j < datas[index].events.length; j++) {
                subItems.push({ select: false, height: liHeight + 'px' });
            }
            selectItems.push({ select: false, subItems, height: 0 });
        }
        setSelectItems(selectItems);
    }, [datas])

    const _getItemHeight = (item) => {
        if (!item.select) return 0;
        let height = liHeight;
        for (let j = 0; j < item.subItems.length; j++) {
            const subItem = item.subItems[j];
            height += subItem.select ? 3 * liHeight : liHeight;
        }
        return height + 'px';
    }

    const _handleTime = (time) => {
        let date = new Date(time);
        let hour = date.getHours();
        let min = date.getMinutes();
        return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min} `
    }

    return (
        <ul className='s-list'>
            { datas.map((data, index) => {
                let item = selectItems[index] || {};
                return (
                    <li key={index} style={item.select ? { borderBottom: 'none' } : {}} >
                        <div
                            className='s-list-header'
                            onClick={() => {
                                item.select = !item.select;
                                item.height = _getItemHeight(item);
                                setSelectItems([...selectItems]);
                            }}>
                            <p>{data.date}</p>
                            <i></i>
                        </div>
                        <ul style={{ height: item.height, transition: 'all 0.2s' }}>
                            <li className='s-in-list-header'>
                                <p>开始时间</p>
                                <p>编号</p>
                                <p>赛事名称</p>
                                <p>买入</p>
                                <p>起始筹码</p>
                                <i className='triangle-down'></i>
                            </li>
                            {data.events.map((e, i) => {
                                let subItem = item.subItems && item.subItems[i] || {};
                                let sepOpacity = i === data.events.length - 1 || subItem.select ? 0 : 1;
                                return (
                                    <li style={{ height: subItem.height, transition: 'all 0.2s' }} key={e.no}>
                                        <div onClick={() => {
                                            subItem.select = !subItem.select;
                                            item.height = _getItemHeight(item);
                                            subItem.height = subItem.select ? 3 * liHeight + 'px' : liHeight + 'px';
                                            setSelectItems([...selectItems]);
                                        }}>
                                            <p>{_handleTime(e.startTime)}</p>
                                            <p>{e.no}</p>
                                            <p>{e.title}</p>
                                            <p>{formatMoney(e.buyin)}</p>
                                            <p>{formatMoney(e.startingChips)}</p>
                                            <i className='triangle-down'></i>
                                            <div className='s-list-seperator' style={{ opacity: sepOpacity, transition: 'all 0.2s' }} />
                                        </div>
                                        <div>
                                            <p>开始时间</p>
                                            <p>编号</p>
                                            <p>赛事名称</p>
                                            <p>买入</p>
                                            <p>起始筹码</p>
                                            <div className='s-list-seperator' style={{ backgroundColor: '#ddd' }} />
                                        </div>
                                        <div>
                                            <p>1次/组</p>
                                            <p>200000</p>
                                            <p>Level 1</p>
                                            <p>20分钟</p>
                                            <p>剩余12%参赛选手</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )
            })
            }
        </ul>
    )
}