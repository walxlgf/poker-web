import React from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import { scrollAnimation } from '../../util/util'
import '../../styles/index-page.scss'


export default ({ photos }) => {

    if (!photos || photos.length == 0) return null;

    return (
        <div className='photoAlbum'>
            <div className='m-content' >
                <div className='m-title'>專輯</div>
                <div style={{ position: 'relative', height: '800px' }}>
                    {
                        photos.map((photo, index) => {
                            let classname = `m-photowall${index + 1}`;
                            let src = `/img/${photo.name.relativePath}`
                            let style = { width: photo.width, height: photo.height }
                            return <img key={index} className={classname} style={style} src={src} />
                        })
                    }
                </div>
                <a className='m-photomore'>更多相冊</a>
                <a className='m-lookEvent' onClick={({ pageY }) => scrollAnimation(pageY, 1000)} >查看最新賽事</a>
            </div>
        </div >
    )
}
