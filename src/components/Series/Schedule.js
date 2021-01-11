
import React, { useState, memo, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import '../../styles/offline-page.scss';
import { Weeks, Months } from '../../util/consts'
import { formatMoney } from '../../util/util';
import SelectItem from './SelectItem'
import { createPortal } from 'react-dom'

const EventTypes = {
    all: '全部赛事',
    main: '主赛事',
    high: '超级豪客赛',
}

const AllEventTypes = [EventTypes.all, EventTypes.main, EventTypes.high];

export default memo(({ series }) => {

    const [curEventType, setCurEventType] = useState(AllEventTypes[0]);
    const [curTime, setCurTime] = useState('');
    const [times, setTimes] = useState([]);
    const [currency, setCurrency] = useState('');
    const [groupEvents, setGroupEvents] = useState([]);
    const eventModalRef = useRef(null);

    // 根据选择的type过滤数据
    useEffect(() => {
        let { groupEvents, times, currency } = _handleEvent();
        setGroupEvents(groupEvents);
        setTimes(times);
        setCurrency(currency);
    }, [curEventType, curTime])

    // 将series中的所有event按照指定格式处理后返回
    // 返回格式：groupEvents： [{date:'9 Nov 2019(星期六), events:[...]}, ...]
    //         times :       ['9 Nov 2019(星期六)',...]
    const _handleEvent = () => {
        let events = [];
        let currency;
        for (let index = 0; index < series.length; index++) {
            const serie = series[index];
            currency = serie.currency;
            for (let j = 0; j < serie.events.length; j++) {
                const event = serie.events[j];
                if (curEventType === EventTypes.all ||
                    (curEventType === EventTypes.main && event.type == 'main') ||
                    (curEventType === EventTypes.high && event.type == 'high')) {
                    events.push(event);
                }
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
        return { groupEvents, times, currency };
    }

    return (
        <div className='s-list-result s-list-box' >
            <h1>赛程表</h1>
            <div className='s-select-box'>
                <SelectItem placeholder='选择赛事' value={curEventType} datas={AllEventTypes}
                    select={(t) => {
                        if (t === curEventType) return;
                        setCurEventType(t);
                        setCurTime('');
                    }} />
                <SelectItem placeholder='选择比赛时间' value={curTime} datas={times} select={t => setCurTime(t)} />
                <a>下载完整赛程表</a>
            </div>
            <EventList currency={currency} datas={groupEvents} detailAction={(event) => eventModalRef.current.show(event)} />
            <EventDetailModal ref={eventModalRef} />
        </div>
    )
})

// Event详情 弹框
const EventDetailModal = forwardRef((props, ref) => {

    const [data, setData] = useState(null);
    const [rounds, setRounds] = useState([]);
    const [visible, setVisible] = useState(false);
    const portalContainer = useRef(null)
    useImperativeHandle(ref, () => ({ show, hidden }));

    const show = (event) => {
        const { scrollTop } = document.documentElement;
        // 固定背后的视图，防止其滚动
        document.body.style.position = 'fixed';
        // 特定条件时，modal弹框会使body自动滚动到最顶部，这里采用设置top值防止默认的回滚行为
        document.body.style.top = `-${scrollTop}px`;
        setVisible(true);
        setData(event);
    };

    const hidden = () => {
        let originTop = document.body.style.top;
        document.body.style.position = ''; // 清除fixed
        originTop = originTop.replace('px', '')
        window.scrollTo(0, Math.abs(originTop))// modal关闭时防止默认的回回滚行为
        setVisible(false);
    }

    useEffect(() => {
        let container = document.createElement('div');
        document.body.appendChild(container);
        portalContainer.current = container;
        return () => document.body.removeChild(container);
    }, [])

    useEffect(() => {
        if (!data || !data.rounds) return;
        let rounds = [];
        let roundsStr = data.rounds.replace(/\s+/g, "");
        let items = roundsStr.split('|');
        let rank1Index = items.findIndex(item => item === '1'); // 找出第一个round
        items = items.slice(rank1Index); // 删除第一个round之前的头部数据
        for (let i = 0; i < items.length;) {
            rounds.push(items.slice(i, i += 6)); // 每6个元素分成一组,注意每组最后一个是一个空字符串  
        }
        setRounds(rounds);
    }, [data])

    const _handleTime = (time) => {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = Months[date.getMonth()]//获取月，从0 - 11
        let day = date.getDate();//获取日
        day = day < 10 ? '0' + day : day;
        let hour = date.getHours();
        hour = hour < 10 ? '0' + hour : hour;
        let min = date.getMinutes();
        min = min < 10 ? '0' + min : min;
        return `${day} ${month} ${year}, ${hour}:${min}`;
    }

    if (!visible || !data) return null;
    let descItems = [
        { left: { key: '開始時間', value: _handleTime(data.startTime) }, right: { key: '起始籌碼', value: formatMoney(data.startingChips) } },
        { left: { key: '買入總額', value: formatMoney(data.buyin + data.adminFee + data.bounty) }, right: { key: '重複買入次數', value: data.reEntry } },
        { left: { key: '管理費', value: formatMoney(data.adminFee) }, right: { key: '買入次數', value: data.boundEventEntries } },
        { left: { key: '獎勵', value: '-' }, right: { key: '剩餘人數', value: data.boundEventRemain } },
        { left: { key: '小費', value: `${data.staffFee}%` }, right: { key: '獎池總額', value: formatMoney(data.boundEventPrizePools) } },
    ];

    return (
        createPortal(
            <div className='modal-box' onClick={hidden}>
                <div className='m-content' onClick={(e) => { e.stopPropagation() }}>
                    <div className='header'>
                        <p>賽事詳情</p>
                        <a onClick={hidden}></a>
                    </div>
                    <h4 className='title'>{data.title}</h4>
                    {descItems.map((item, index) => {
                        let isLastItem = index === descItems.length - 1;
                        return (
                            <div key={index} className='descItem' style={isLastItem ? { borderBottom: 'none' } : {}}>
                                <div className='left'>
                                    <p className='key'>{item.left.key}</p>
                                    <p className='value'>{item.left.value}</p>
                                </div>
                                <div className='right'>
                                    <p className='key'>{item.right.key}</p>
                                    <p className='value'>{item.right.value}</p>
                                </div>
                            </div>
                        )
                    })}
                    <table >
                        <thead>
                            <tr><th>級別</th><th>小盲注</th><th>大盲注</th><th>前注</th><th>時長</th></tr>
                        </thead>
                        <tbody>
                            {rounds.map((round, i) => {
                                let isLastItem = i === rounds.length - 1;
                                return (
                                    <tr key={i} style={isLastItem ? { borderBottom: 'none' } : {}}>
                                        {round.map((v, j) => {
                                            if (j === round.length - 1) return null;
                                            return <td key={j}>{formatMoney(v)}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='m-bottom'>
                        <a className='share'><i></i></a>
                        <a className='download'><i></i></a>
                    </div>
                </div>
            </div>
            , portalContainer.current)
    )
})

// Events 列表
const liHeight = 70;
const EventList = (props) => {
    const { datas, currency, detailAction } = props;
    // 记录所有row是否被点击了，以及row的高度
    const [selectItems, setSelectItems] = useState([]);

    useEffect(() => {
        let selectItems = [];
        for (let index = 0; index < datas.length; index++) {
            let subItems = [];
            for (let j = 0; j < datas[index].events.length; j++) {
                subItems.push({ select: false, height: liHeight + 'px' });
            }
            let item = { select: false, subItems, height: 0 };
            if (index == 0) { // 默认第一项展开
                item.select = true;
                item.height = _getItemHeight(item);
            }
            selectItems.push(item);
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
        <ul className='s-list'> {datas.map((data, index) => {
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
                        <i className={item.select ? 'active' : ''}></i>
                    </div>
                    <ul style={{ height: item.height, transition: 'all 0.2s' }}>
                        <li className='s-in-list-header'>
                            <p style={{ flex: 134 / 1200 }}>開始時間</p>
                            <p style={{ flex: 79 / 1200 }}>編號</p>
                            <p style={{ flex: 273 / 1200 }}>賽事名稱</p>
                            <p style={{ flex: 103 / 1200 }}>等級</p>
                            <p style={{ flex: 149 / 1200 }}>{`買入 (${currency})`}</p>
                            <p style={{ flex: 136 / 1200 }}>起始筹码</p>
                            <p style={{ flex: 203 / 1200 }}>備注</p>
                            <p style={{ flex: 112 / 1200 }}>查看詳情</p>
                            <i className='triangle-down'></i>
                        </li>
                        {data.events.map((e, i) => {
                            return (
                                <li key={e.no} className='s-in-list-other'>
                                    <p style={{ flex: 134 / 1200, marginLeft: '38px' }}>{_handleTime(e.startTime)}</p>
                                    <p style={{ flex: 79 / 1200 }}>{e.no}</p>
                                    <div style={{ flex: 273 / 1200, maxWidth: '266px' }}>
                                        <p style={{ width: '80%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.title}</p>
                                    </div>
                                    <p style={{ flex: 103 / 1200 }}>-</p>
                                    <p style={{ flex: 149 / 1200 }}>{formatMoney(e.buyin + e.adminFee + e.bounty)}</p>
                                    <p style={{ flex: 136 / 1200 }}>{formatMoney(e.startingChips)}</p>
                                    <div style={{ flex: 203 / 1200, maxWidth: '200px' }}>
                                        <p style={{ width: '90%', overflow: 'hidden', textOverflow: 'ellipsis' }}>-</p>
                                    </div>
                                    <img
                                        onClick={() => detailAction(e)}
                                        style={{ flex: 112 / 1200, width: '34px', height: '19px', objectFit: 'contain', marginTop: '25px', cursor: 'pointer' }}
                                        src={require('../../img/eye.png')}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </li>
            )
        })}
        </ul>
    )
}


