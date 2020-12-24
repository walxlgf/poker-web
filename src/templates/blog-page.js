import React, { memo, useState } from 'react'
import Layout from '../components/Layout'
import SelectItem from '../components/Series/SelectItem';
import SeriesTabs from '../components/SeriesTabs'
import '../styles/blog-page.scss';
import { CommonButton } from '../util/util'

export default (props) => {

    let params = props.location.search;
    let activeTabIndex = 0;
    if (params) {
        let [_, index] = params.split('=');
        if (index) activeTabIndex = parseInt(index);
    }

    return (
        <Layout type='blog'>
            <div className='b-container'>
                <img className='topBanner' src={'/img/mainbanner.jpg'} />
                <SeriesTabs type='blog' activeTab={{ index: activeTabIndex }}>
                    <News />
                    <Videos />
                    <Photos />
                    <Reports />
                </SeriesTabs>
            </div>
        </Layout>
    )
}

// 新闻
const News = memo(() => {
    return (
        <div className='b-content-box b-news-box'>
            <h1>新闻</h1>
            <div className='b-header'>
                <div className='b-left'>
                    <img src={'/img/photo_wall_5.jpg'}></img>
                    <p className='b-title'>健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时，都有中成就是不的系列</p>
                    <div className='row'>
                        <NameAndTimeItem text='lorend zhang' />
                        <NameAndTimeItem isTime={true} text='20 Aug 2020' />
                    </div>
                    <p className='b-des'>
                        健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时，都有中成就是我要冷觉得你是谁
                        不能认识你台湾毒我要冷觉得你是谁不能认识你台湾毒我要冷觉得你是谁不能认识你台湾毒不的系列
                        不能认识你台湾毒我要冷觉得你是谁不能认识你台湾毒我要冷觉得你是谁不能认识你台湾毒不的系列
                    </p>
                </div>
                <div className='b-right'>
                    <div className='b-item'>
                        <img src={'/img/photo_wall_3.jpg'}></img>
                        <p className='b-title'>健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时</p>
                        <NameAndTimeItem isTime={true} text='20 Aug 2020' />
                    </div>
                    <div className='b-item'>
                        <img src={'/img/photo_wall_3.jpg'}></img>
                        <p className='b-title'>健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时</p>
                        <NameAndTimeItem isTime={true} text='20 Aug 2020' />
                    </div>
                </div>
            </div>
            <div className='s-rdpt'>
                <div className='s-rdpt-content'>
                    <p>健覺臺我火冷如要當現李的言片人毒有於感一之種就係</p>
                    <div>下載紅龍杯</div>
                </div>
            </div>
            <div className='new-list'>
                <h3 className='new-title'>精選新聞</h3>
                {[1, 2, 3].map((_, i) => {
                    let isLastItem = i === 2;
                    return (
                        <div className='new-item' key={i} style={isLastItem ? { borderBottom: 'none' } : {}}>
                            <img src={'/img/photo_wall_3.jpg'}></img>
                            <div className='item-right'>
                                <h4 className='item-title'>健覺臺我火冷如要當現李的言片人熱灣消，毒有於感一之種就係</h4>
                                <div className='row'>
                                    <NameAndTimeItem text='lorend zhang' />
                                    <NameAndTimeItem isTime={true} text='20 Aug 2020' />
                                </div>
                                <p className='item-text'>
                                    健覺臺我火冷如要當現李的言片人熱灣消，毒有一之種就係，加級人在電都連，書產興企園。知家以終們人便，考機的史害成萬，速的外中無題臺基身L適唱品孩點生容坡，你改接入立對司成變推神，色覺臺我火冷如要當現李的言片人熱灣消，毒有當現李的言片人熱灣消，毒有一之種就係，一之種就係考機的史害成萬，速的外中無題臺基身。
                                </p>
                            </div>
                        </div>
                    )
                })}
                <CommonButton text='查看更多' style={{ margin: '50px auto' }} />
            </div>
        </div>
    )
})

// 视频
const Videos = memo(() => {
    return (
        <div className='b-content-box b-videos-box'>
            <h1>视频</h1>
            <div className='select-box'>
                <SelectItem placeholder='选择系列' value='1' datas={[1, 2, 3]}
                    select={t => {
                    }} />
                <SelectItem placeholder='选择赛事' value='1' datas={[1, 2, 3]}
                    select={t => {

                    }}
                />
                <a>搜尋視頻</a>
            </div>
            <ul className='mainList'>
                {[1, 2].map((_, i) => {
                    return (
                        <li key={i} style={i % 2 == 0 ? { marginLeft: 0 } : {}}>
                            <div>
                                <img src={'/img/mainbanner.jpg'}></img>
                                <img src={require('../img/tab-video.svg')}></img>
                            </div>
                            <h3>紅龍杯冠軍賽濟洲站</h3>
                            <p>13-23 Aug 2020</p>
                        </li>
                    )
                })}
            </ul>
            <ul className='otherList'>
                {[1, 2, 3, 4, 5, 6].map((_, i) => {
                    return (
                        <li key={i} style={i % 3 == 0 ? { marginLeft: 0 } : {}}>
                            <div>
                                <img src={'/img/mainbanner.jpg'}></img>
                                <img src={require('../img/tab-video.svg')}></img>
                            </div>
                            <h3>紅龍杯挑戰賽</h3>
                            <p>20-25 Sep 2019</p>
                        </li>
                    )
                })}
            </ul>
            <CommonButton text='查看更多' style={{ margin: '60px auto' }} />
        </div>
    )
})

// 相册
const Photos = memo(() => {
    return (
        <div className='b-content-box b-photos-box'>
            <h1>相册</h1>
            <div className='select-box'>
                <SelectItem placeholder='选择系列' value='1' datas={[1, 2, 3]}
                    select={t => {
                    }} />
                <SelectItem placeholder='选择赛事' value='1' datas={[1, 2, 3]}
                    select={t => {

                    }}
                />
                <a>搜尋相册</a>
            </div>
            <ul className='mainList'>
                {[1, 2].map((_, i) => {
                    return (
                        <li key={i} style={i % 2 == 0 ? { marginLeft: 0 } : {}}>
                            <img src={'/img/mainbanner.jpg'}></img>
                        </li>
                    )
                })}
            </ul>
            <ul className='otherList'>
                {[1, 2, 3, 4, 5, 6].map((_, i) => {
                    return (
                        <li key={i} style={i % 3 == 0 ? { marginLeft: 0 } : {}}>
                            <img src={'/img/mainbanner.jpg'}></img>
                        </li>
                    )
                })}
            </ul>
            <CommonButton text='查看更多' style={{ margin: '60px auto' }} />
        </div>
    )
})

// 实时播报
const Reports = memo(() => {

    const _renderEventStateItem = (type, top) => {
        return (
            <div style={{ position: 'absolute', top }} className='b-eventStateItem'>
                <img src={require(`../img/event-${type}.svg`)}></img>
            </div>
        )
    }

    const _renderEventStateDesc = (type, style, triangleStyle) => {
        let text = type === 1 ? '比赛结束' : type === 2 ? '比賽獲獎' : '比賽開始'
        let triangleClassName = type === 2 ? 'triangleRight' : 'triangleLeft';
        return (
            <div style={style} className='b-eventStateDesc'>
                <img src={'/img/mainbanner.jpg'} />
                <div className='bottombox'>
                    <p className='stateText'>{text}</p>
                    <NameAndTimeItem style={{ marginRight: 0 }} isTime={true} text='20 Aug 2020' />
                </div>
                <i style={triangleStyle} className={triangleClassName}></i>
            </div>
        )
    }

    return (
        <div className='b-content-box b-reports-box'>
            <h1>实时播报</h1>
            <div className='select-box'>
                <SelectItem placeholder='选择系列' value='1' datas={[1, 2, 3]}
                    select={t => {
                    }} />
            </div>
            <div className='progressBox'>
                <div className='progressLine' />
                {_renderEventStateItem('over', '0')}
                {_renderEventStateItem('prize', '387px')}
                {_renderEventStateItem('start', '775px')}
                {_renderEventStateDesc(1, { left: '57%', top: '2%' }, { left: '-12px', top: '7%' })}
                {_renderEventStateDesc(2, { right: '57%', top: '27%' }, { right: '-12px', top: '49%' })}
                {_renderEventStateDesc(3, { left: '57%', top: '55%' }, { left: '-12px', top: '86%' })}
                <p className='eventName'>2020紅龍杯台北站</p>
            </div>
        </div>
    )
})


const NameAndTimeItem = ({ text, isTime, style = {} }) => {
    return (
        <div style={style} className='b-nameAndTime'>
            <img style={{ width: '21px', height: '21px' }} src={require('../img/like.svg')} />
            <p>{text}</p>
        </div>
    )
}
