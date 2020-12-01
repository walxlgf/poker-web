import React from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import { scrollAnimation } from '../../util/util'
import '../../styles/index-page.scss'


export default ({ photos }) => {

    if (!photos || photos.length == 0) return null;

    const _pxHandle = (x) => {
        x = x + '';
        if (x.includes('px')) return x;
        return x + 'px';
    }

    return (
        <div className='photoAlbum'>
            <div className='m-content' >
                <div className='m-title'>專輯</div>
                <div style={{ position: 'relative', height: '800px' }}>
                    {
                        photos.map((photo, index) => {
                            let classname = `m-photowall${index + 1}`;
                            let src = `/img/${photo.name.relativePath}`
                            let style = { width: _pxHandle(photo.width), height: _pxHandle(photo.height) }
                            return (
                                <div key={index} className={classname}
                                    style={{ width: style.width, height: style.height, position: 'absolute', overflow: 'hidden' }}>
                                    <img key={index} style={style} src={src} />
                                    <div className='m-cover' style={{}} />
                                </div>
                            )
                        })
                    }
                </div>
                <a className='m-photomore'>更多相冊</a>
                <a className='m-lookEvent' onClick={({ pageY }) => scrollAnimation(pageY, 1000)} >查看最新賽事</a>
            </div>
        </div >
    )
}
