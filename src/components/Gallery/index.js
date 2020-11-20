import React from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import { scrollAnimation } from '../../util/util'
import '../../styles/index-page.scss'

export default () => {
    return (
        <div className='photoAlbum'>
            <div className='m-content' >
                <div className='m-title'>專輯</div>
                <div style={{ position: 'relative', height: '800px' }}>
                    <img className='m-photowall1' src={require('../../img/photo_wall_3.jpg')} />
                    <img className='m-photowall2' src={require('../../img/photo_wall_5.jpg')}></img>
                    <img className='m-photowall3' src={require('../../img/photo_wall_4.jpg')}></img>
                    <img className='m-photowall4' src={require('../../img/photo_wall_6.jpg')}></img>
                    <img className='m-photowall5' src={require('../../img/photo_wall_7.jpg')}></img>
                    <img className='m-photowall6' src={require('../../img/photo_wall_8.jpg')}></img>
                </div>
                <a className='m-photomore'>更多相冊</a>
                <a className='m-lookEvent' onClick={({ pageY }) => scrollAnimation(pageY, 1000)} >查看最新賽事</a>
            </div>
        </div >
    )
}
