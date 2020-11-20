import React from "react"
import { Link } from 'gatsby'



export default () => {


    const _renderItem = (isTop) => {
        let bgColor = isTop ? '#db2c2d' : '#b52222';
        let marginTop = isTop ? 0 : '40px';
        return (
            <div style={{ width: '280px', height: '400px', backgroundColor: bgColor, padding: '20px', position: 'relative', marginTop: marginTop }}>
                <div style={{ width: '280px', height: '45px' }}>
                    <div style={{
                        width: '135px', height: '45px', display: 'flex', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginLeft: '-25px', float: 'left'
                    }}>
                        <img style={{ width: '22px', height: '22px' }} src={require('../img/overIcon.png')}></img>
                        <span style={{ fontSize: '16px', color: 'black', fontWeight: '500', fontFamily: 'NotoSansTC', marginLeft: '6px' }}>已經結束</span>
                    </div>

                    <div style={{
                        width: '88px', height: '45px', float: 'right', display: 'flex', marginRight: '20px',
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '16px', color: 'white', fontFamily: 'NotoSansTC', marginRight: '6px' }}>73</span>
                        <img style={{ width: '32px', height: '18px' }} src={require('../img/eye.png')}></img>
                    </div>
                </div>

                <p style={{ fontFamily: 'NotoSansTC', fontSize: '30px', color: 'white', lineHeight: '35px', marginTop: '15px' }}>
                    2020紅龍杯
                    <br></br>
                    青龍杯濟洲站
                </p>

                <p style={{ height: '2px', backgroundColor: 'black', borderRadius: '1px', marginTop: '-15px' }}></p>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img style={{ width: '25px', height: '25px' }} src={require('../img/calendar.png')}></img>
                    <span style={{ fontSize: '21px', color: 'white', fontFamily: 'NotoSansTC', marginLeft: '10px', opacity: 0.6 }}>19-25 Oct 20</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px' }}>
                    <img style={{ width: '25px', height: '31px' }} src={require('../img/location.png')}></img>
                    <span style={{ fontSize: '19px', color: 'white', fontFamily: 'NotoSansTC', marginLeft: '10px', opacity: 0.6 }}>韓國濟洲島</span>
                </div>

                <div style={{
                    width: '240px', height: '60px', border: 'solid 1px #000000', textAlign: 'center', lineHeight: '60px',
                    color: 'white', fontSize: '18px', position: 'absolute', left: '20px', bottom: '20px',
                }}>
                    查看詳情
                 </div>
            </div>
        )
    }


    return (
        <div style={{ background: 'black', marginTop: '-15px', paddingBottom: '10px' }}>
            <div style={{ width: '1200px', margin: '0 auto' }} >
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', paddingBottom: '41px' }}>
                    <h3 style={{ fontFamily: 'NotoSansTC', fontSize: '44px', color: 'white' }}>
                        <span>2020</span>
                        紅龍標賽事表
                    </h3>
                </div>
                <ul style={{
                    listStyle: 'none', width: '100%', height: '440px',
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <li> {_renderItem(true)} </li>
                    <li> {_renderItem(false)} </li>
                    <li> {_renderItem(true)} </li>
                    <li> {_renderItem(false)} </li>
                </ul>

                <div style={{
                    width: '250px', height: '65px', border: 'solid 1px #fff', textAlign: 'center', lineHeight: '65px',
                    color: 'white', fontSize: '18px', fontFamily: 'NotoSansTC', margin: '57px auto'
                }}>
                    閱讀緊多
                 </div>

            </div>
        </div >
    )
}



function Banner({ thisYearSeriess }) {


    return (
        <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
                <div className="title" style={{ border: "1px dotted orange" }}>2020 紅龍標賽事表</div>
            </div>
            <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
                <div className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
                    {thisYearSeriess && thisYearSeriess.map(edge => (
                        <div className="column is-3" key={edge.node.fields.slug}>
                            <div
                                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", border: "1px dotted orange" }}>
                                <div className="title">
                                    {edge.node.frontmatter.title}
                                </div>
                                <div className="subtitle">
                                    {edge.node.frontmatter.description}
                                </div>
                                <div className="subtitle">
                                    {edge.node.frontmatter.date}
                                </div>
                                <Link to={edge.node.fields.slug}>
                                    <button className="button is-primary is-inverted is-outlined">查看详情</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}