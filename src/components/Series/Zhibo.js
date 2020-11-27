import React, { useState, memo } from 'react'
import '../../styles/offline-page.scss';

export default memo(() => {
    return (
        <div className='s-zhibo-box' >
            <h1>赛事直播</h1>
            <div className='s-player-box'>
                <div className='s-image-box'>
                    <img src={'/img/photo_wall_7.jpg'} />
                    <img src={require('../../img/playerBtn.png')}></img>
                </div>
                <p className="s-audio-title">豪客赛-无限注德州扑克</p>
                <div>
                    <p>收看次数：285</p>
                    <span className='s-share'>分享</span>
                    <span className='s-like'>140👍</span>
                </div>
            </div>

            <div className='s-other-box'>
                <h1>其他精彩赛事</h1>
                <ul>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                    <li>
                        <div>
                            <img src={'/img/photo_wall_7.jpg'} />
                            <img src={require('../../img/playerBtn.png')}></img>
                        </div>
                        <p className='s-title'>红龙杯挑战赛</p>
                        <p className='s-time'>20-25  sep 2019</p>
                    </li>
                </ul>
                <div className='s-more'>查看更多视频</div>
            </div>
        </div>
    )
})
