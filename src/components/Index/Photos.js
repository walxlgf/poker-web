import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import { scrollAnimation, HoverAnimationView } from '../../util/util'
import '../../styles/index-page.scss'
import Bus, { EVENTS } from '../../util/eventBus.js'
import "animate.css";

export default ({ photos }) => {

    const [isShow, setIsShow] = useState(false)
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
                                    <img key={index} style={style} src={src} />
                                    <div className='m-cover' style={{}} />
                                </a>
                            )
                        })
                    }
                </div>
                <a className='m-photomore'>
                    <HoverAnimationView>更多相冊</HoverAnimationView>
                </a>
                <a className='m-lookEvent' onClick={({ pageY }) => scrollAnimation(pageY, 850)} >
                    <HoverAnimationView>查看最新賽事</HoverAnimationView>
                </a>
            </div>
        </div >
    )
}
