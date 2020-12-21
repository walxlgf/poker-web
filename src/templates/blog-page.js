import React, { memo } from 'react'
import Layout from '../components/Layout'
import SeriesTabs from '../components/SeriesTabs'
import '../styles/blog-page.scss';
import { ICONS } from '../util/util'

export default () => {
    return (
        <Layout>
            <div className='b-container'>
                <img className='topBanner' src={'/img/mainbanner.jpg'} />
                <SeriesTabs type='blog' >
                    <News />
                    <Videos />
                    <Photos />
                    <Reports />
                </SeriesTabs>
            </div>
        </Layout>
    )
}

const NameAndTimeItem = ({ text, isTime }) => {
    return (
        <div className='b-nameAndTime'>
            <img style={{ width: '21px', height: '21px' }} src={require('../img/like.svg')} />
            <p>{text}</p>
        </div>
    )
}


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
                <div className='s-more'>查看更多</div>
            </div>
        </div>
    )
})

const Videos = () => {
    return (
        <div className='b-content-box b-videos-box'>

        </div>
    )
}

const Photos = () => {
    return (
        <div className='b-content-box b-photos-box'>

        </div>
    )
}

const Reports = () => {
    return (
        <div className='b-content-box b-reports-box'>

        </div>
    )
}