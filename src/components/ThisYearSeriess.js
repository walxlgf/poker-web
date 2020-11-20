import React from "react"
import { Link } from 'gatsby'



export default () => {

    const _renderItem = (isTop) => {
        let bgColor = isTop ? '#db2c2d' : '#b52222';
        let marginTop = isTop ? 0 : '40px';
        return (
            <div className='o-itemContainer' style={{ backgroundColor: bgColor, marginTop: marginTop }}>
                <div className='o-state' >
                    <div className='o-stateLeft'>
                        <img src={require('../img/overIcon.png')}></img>
                        <span >已經結束</span>
                    </div>
                    <div className='o-stateRight'>
                        <span>73</span>
                        <img src={require('../img/eye.png')}></img>
                    </div>
                </div>
                <p className='o-title'>2020紅龍杯<br></br>青龍杯濟洲站</p>
                <p className='o-line' />
                <p className="date">
                    <img src={require('../img/calendar.png')}></img>
                    <span>19-25 Oct 20</span>
                </p>
                <p className='o-location'>
                    <img src={require('../img/location.png')}></img>
                    <span >韓國濟洲島</span>
                </p>
                <div className='o-detail'>查看詳情</div>
            </div>
        )
    }

    return (
        <div className='thisYearSeries' >
            <div className='o-content' >
                <div className='o-header'>
                    <h3><span>2020</span>紅龍標賽事表</h3>
                </div>
                <ul >
                    <li> {_renderItem(true)} </li>
                    <li> {_renderItem(false)} </li>
                    <li> {_renderItem(true)} </li>
                    <li> {_renderItem(false)} </li>
                </ul>
                <div className='o-more'>閱讀緊多</div>
            </div>
        </div >
    )
}


/*
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
*/