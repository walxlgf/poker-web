import React from 'react';
// import Gallery from 'react-grid-gallery';
import { Link } from 'gatsby'
import { navigate } from "gatsby"

import { scrollAnimation } from '../../util/util'
import './index.scss'

import Gallery from 'react-photo-gallery';


export default () => {

    return (
        <div style={{ background: 'black', paddingBottom: '60px' }}>
            <div style={{
                paddingTop: '20px', paddingBottom: '50px', color: 'white', textAlign: 'center',
                fontSize: '44px', fontFamily: 'NotoSansTC'
            }}>
                專輯
            </div>

            <div style={{ position: 'relative', height: '800px' }}>
                <img
                    className='photowall1'
                    src={require('../../img/photo_wall_3.jpg')} />

                <img
                    className='photowall2'
                    src={require('../../img/photo_wall_5.jpg')}></img>
                <img
                    className='photowall3'
                    src={require('../../img/photo_wall_4.jpg')}></img>
                <img
                    className='photowall4'
                    src={require('../../img/photo_wall_6.jpg')}></img>
                <img
                    className='photowall5'
                    src={require('../../img/photo_wall_7.jpg')}></img>
                <img className='photowall6'
                    src={require('../../img/photo_wall_8.jpg')}></img>
            </div>

            <a className='photomore' >
                更多相冊
            </a>

            <a
                onClick={({ pageY }) => scrollAnimation(pageY, 1000)}
                style={{
                    width: '250px', height: '65px', border: 'solid 1px #fff', textAlign: 'center', lineHeight: '65px',
                    color: 'white', fontSize: '18px', fontFamily: 'NotoSansTC', margin: '80px auto', display: 'block'
                }}>
                查看最新賽事
            </a>
        </div >
    )
}



const IMAGES =
    [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: "37H (gratispgraphy.com)"
        },
        {
            src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "201H (gratisography.com)"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Man on BMX (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 257,
            thumbnailHeight: 320,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        }
    ];
const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
        width: 4927,
        height: 1000
    },
    {
        src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
        width: 4,
        height: 3
    }
];

() => {
    return (<div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
        <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
            <div className="title" style={{ border: "1px dotted orange" }}>专辑</div>
        </div>
        <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
            <Gallery photos={photos} />
        </div>
    </div>)
}