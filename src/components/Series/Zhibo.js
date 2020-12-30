import React, { useState, memo } from 'react'
import '../../styles/offline-page.scss';
import { CommonButton } from '../../util/util'

export default memo(() => {
    return (
        <div className='s-zhibo-box' >
            <h1>赛事直播</h1>
            <div className='s-current-box'>
                <div className='s-left'>
                    <div className='s-image-box'>
                        <img src={'/img/photo_wall_7.jpg'} />
                        <img className='absCenter' src={require('../../img/playerBtn.png')}></img>
                    </div>
                    <p className="s-audio-title">豪客赛-无限注德州扑克</p>
                    <div className='s-des-box'>
                        <p>收看次数：285</p>
                        <div className='like-share-box row'>
                            <div className='s-like row'>
                                <p>140</p>
                                <img src={require('../../img/like.svg')}></img>
                            </div>
                            <div className='s-share row'>
                                <p>分享</p>
                                <img src={require('../../img/share.svg')}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='s-right'>

                </div>
            </div>

            <div className='s-other-box'>
                <h2>其他精彩赛事</h2>
                <ul>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img className='absCenter' src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img className='absCenter' src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img className='absCenter' src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                </ul>
                <CommonButton text='查看更多视频' style={{ margin: '60px auto' }} />
            </div>
        </div>
    )
})
