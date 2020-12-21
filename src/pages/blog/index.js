import React from 'react'
import Layout from '../../components/Layout'
import SeriesTabs from '../../components/SeriesTabs'
import '../../styles/blog-page.scss';


export default () => {
    return (
        <Layout>
            <div className='b-container'>
                <div className='b-image-content'>
                    <img src={'/img/mainbanner.jpg'} />
                </div>
                <SeriesTabs activeTab={{ index: 0 }}

                >
                    <Videos />
                    <News />
                    <Photos />
                    <Reports />
                </SeriesTabs>
            </div>
        </Layout>
    )
}


const News = () => {
    return (
        <div className='b-content-box b-news-box'>
            <h1>新闻</h1>
            <div className='b-header'>
                <div className='b-left'>
                    <img src={'/img/photo_wall_5.jpg'}></img>
                    <p className='b-title'>健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时，都有中成就是不的系列</p>
                    <span className='b-postname'>lorend zhang</span>
                    <span className='b-time'>20 Aug 2020</span>
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
                        <span className='b-time'>20 Aug 2020</span>
                    </div>
                    <div className='b-item'>
                        <img src={'/img/photo_wall_3.jpg'}></img>
                        <p className='b-title'>健康我要冷觉得你是谁不能认识你台湾毒有属于我的感觉之一的小时</p>
                        <span className='b-time'>20 Aug 2020</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

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