import React, { useEffect, useState } from 'react';
import { navigate } from "gatsby"
import { scrollAnimation, CommonButton, useImgLazyLoad } from '../../util/util'
import '../../styles/index-page.scss'
import Bus, { EVENTS } from '../../util/eventBus.js'
import "animate.css";


export default ({ photos }) => {

    const [isShow, setIsShow] = useState(true);
    useImgLazyLoad('lazy-load');

    useEffect(() => {
        Bus.addListener(EVENTS.bgAnimationView, (index) => {
            if (index != 5) return; // 监听第六个色块的出现
            setIsShow(true);
        });
    }, [])

    const _pxHandle = (x) => {
        x = x + '';
        if (x.includes('px')) return x;
        return x + 'px';
    }

    if (!photos || photos.length == 0) return null;
    return (
        <div className='photoAlbum'>
            <div className={`m-content animate__animated ${isShow ? 'animate__fadeIn' : ''}`}>
                <div className='m-title'>專輯</div>
                <div style={{ position: 'relative', height: '800px' }}>
                    {
                        photos.map((photo, index) => {
                            let classname = `m-photowall${index + 1}`;
                            let src = `/img/${photo.name.relativePath}`
                            let style = { width: _pxHandle(photo.width), height: _pxHandle(photo.height) }
                            return (
                                <a key={index} className={classname}
                                    style={{ width: style.width, height: style.height, position: 'absolute', overflow: 'hidden' }}>
                                    <img className='lazy-load' style={style} data-url={src} />
                                    <div className='m-cover' />
                                </a>
                            )
                        })
                    }
                </div>
                <CommonButton text='更多相冊' style={{ margin: '30px auto', borderColor: 'rgba(255,255,255,0.6)' }} />
                <CommonButton text='查看最新賽事' style={{ margin: '130px auto', borderColor: 'rgba(255,255,255,0.6)' }}
                    onClick={({ pageY }) => scrollAnimation(pageY, 850)} />
            </div>
        </div >
    )
}
