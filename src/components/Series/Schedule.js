
import { tuple } from 'antd/lib/_util/type';
import React, { useState, memo, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import '../../styles/offline-page.scss';
import { Weeks, Months, Categories } from '../../util/consts'
import { formatMoney } from '../../util/util';
import SelectItem from './SelectItem'

export default memo(({ series, category }) => {

    const [curCategory, setCurCategory] = useState(category);
    const [curTime, setCurTime] = useState('');
    const [times, setTimes] = useState([]);
    const [groupEvents, setGroupEvents] = useState([]);
    const [eventModalVisible, setEventModalVisible] = useState(false);
    const eventModalRef = useRef(null);

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

    const _eventDetailAction = (event) => {
        eventModalRef.current.show();
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
            <EventList datas={groupEvents} detailAction={_eventDetailAction} />
            <EventDetailModal ref={eventModalRef} />
        </div>
    )
})


const EventDetailModal = forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false);
    useImperativeHandle(ref, () => ({ show, hidden }));

    const show = () => {
        const { scrollTop } = document.documentElement;
        // 禁止除了modal以外的滚动
        document.body.style.position = 'fixed';
        // antd中的Modal当弹出时，body会自动滚动到最顶部，这里采用设置top值防止默认的回滚行为
        document.body.style.top = `-${scrollTop}px`;
        setVisible(true);
    };

    const hidden = () => {
        let originTop = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = ``;
        originTop = originTop.replace('px', '')
        // 防止默认的回回滚行为
        window.scrollTo(0, Math.abs(originTop))
        setVisible(false);
    }

    let descItems = [
        { left: { key: '開始時間', value: '04 Jan 2020, 12:03' }, right: { key: '起始籌碼', value: '20,000' } },
        { left: { key: '買入總額', value: '18,000' }, right: { key: '重複買入次數', value: '1' } },
        { left: { key: '管理費', value: '2000' }, right: { key: '買入次數', value: '188' } },
        { left: { key: '獎勵', value: '0' }, right: { key: '剩餘人數', value: '21' } },
        { left: { key: '小費', value: '3%' }, right: { key: '獎池總額', value: '20,000,99' } },
    ]

    if (!visible) return null;
    return (
        <div className='modal-box' onClick={hidden}>
            <div className='m-content' onClick={(e) => { e.stopPropagation() }}>
                <div className='header'>
                    <p>賽事詳情</p>
                    <i onClick={hidden}></i>
                </div>
                <h4 className='title'>#1A Red Dragon Kickoﬀ - Day 1A</h4>
                {
                    descItems.map((item, index) => {
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
                    })
                }
                <table >
                    <thead>
                        <tr>
                            <th>級別</th>
                            <th>小盲注</th>
                            <th>大盲注</th>
                            <th>前注</th>
                            <th>時長</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
                                let isLastItem = i === 9;
                                return (
                                    <tr key={i} style={isLastItem ? { borderBottom: 'none' } : {}}>
                                        <td>{i + 1}</td>
                                        <td>100</td>
                                        <td>200</td>
                                        <td>200</td>
                                        <td>110</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='m-bottom'>
                    <div className='share'><i></i></div>
                    <div className='download'><i></i></div>
                </div>
            </div>
        </div>
    )
})

const liHeight = 70;
const EventList = (props) => {
    const { datas, detailAction } = props;
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
                        <i></i>
                    </div>
                    <ul style={{ height: item.height, transition: 'all 0.2s' }}>
                        <li className='s-in-list-header'>
                            <p style={{ flex: 134 / 1200 }}>開始時間</p>
                            <p style={{ flex: 79 / 1200 }}>編號</p>
                            <p style={{ flex: 273 / 1200 }}>賽事名稱</p>
                            <p style={{ flex: 103 / 1200 }}>等級</p>
                            <p style={{ flex: 149 / 1200 }}>買入(韓元)</p>
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
                                    <p style={{ flex: 103 / 1200 }}>Day 1A</p>
                                    <p style={{ flex: 149 / 1200 }}>{formatMoney(e.buyin)}</p>
                                    <p style={{ flex: 136 / 1200 }}>{formatMoney(e.startingChips)}</p>
                                    <div style={{ flex: 203 / 1200, maxWidth: '200px' }}>
                                        <p style={{ width: '90%', overflow: 'hidden', textOverflow: 'ellipsis' }}>-</p>
                                    </div>
                                    <img
                                        onClick={() => detailAction(e)}
                                        style={{ flex: 112 / 1200, width: '34px', height: '19px', objectFit: 'contain', marginTop: '25px' }}
                                        src={require('../../img/eye.png')}
                                    />
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


