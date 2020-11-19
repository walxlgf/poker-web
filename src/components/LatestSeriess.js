import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ latestSeriess }) => {

    const _renderItem = (edge, isLastItem) => {
        let { date, description, title, bannerImage } = edge.node.frontmatter;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', height: '380px', marginBottom: isLastItem ? '0px' : '60px' }}>
                <div style={{ flex: 3, position: 'relative' }}>
                    <h3 style={{ fontSize: '35px', color: 'white', fontFamily: 'NotoSansTC', marginTop: '-5px' }}>
                        {title}
                    </h3>
                    <p style={{ fontSize: '18px', color: 'white', lineHeight: '35px', marginTop: '-5px', width: '78%', opacity: 0.6 }}>
                        {description}
                    </p>
                    <span style={{ fontSize: '18px', color: 'white', opacity: 0.6 }}>奖金  </span>
                    <p style={{ fontSize: '50px', fontWeight: 'bold', color: 'white', fontFamily: 'NotoSansTC', marginTop: '-15px' }}>
                        $300,000,000
                    </p>
                    <Link
                        to={edge.node.fields.slug}
                        style={{
                            width: '250px', height: '65px', border: 'solid 1px #db2c2d', textAlign: 'center', lineHeight: '65px',
                            opacity: 0.7, color: 'white', fontSize: '18px', position: 'absolute', left: 0, bottom: 0, opacity: 0.6
                        }}>
                        最新晉級名單
                    </Link>
                </div>
                <div style={{ flex: 5, backgroundColor: '#58595b', overflow: 'hidden', position: 'relative' }}>
                    <Img style={{ width: "100%", height: '100%' }} fluid={bannerImage.childImageSharp.fluid} />
                    <div style={{
                        width: '360px', height: '80px', backgroundColor: '#b52222', lineHeight: '80px', textAlign: 'center', color: 'white',
                        position: 'absolute', left: 0, bottom: '43px', fontWeight: 'bold', fontSize: '28px', fontFamily: 'NotoSansTC'
                    }}>
                        濟洲站
                        <span style={{ color: 'black', width: '1px', margin: '0 18px', lineHeight: '26px' }}>|</span>
                        04 May 2020
                    </div>
                    <div style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute',
                        right: 0, top: 0, width: '100px', height: '50px'
                    }}>
                        <div style={{ padding: '15px' }}>
                            <img style={{ width: '8px', height: '15px' }} src={require('../img/arrow_left.png')}></img>
                        </div>
                        <div style={{ padding: '15px' }}>
                            <img style={{ width: '8px', height: '15px', }} src={require('../img/arrow_right.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ background: 'black' }}>
            <div style={{ width: '1200px', margin: '0 auto' }} >
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '109px', paddingBottom: '74px' }}>
                    <img style={{ width: "184px", height: "43px" }} src={require('../img/lastSeriesTitle.svg')}></img>
                </div>
                <ul style={{ listStyle: 'none' }}>
                    {latestSeriess && latestSeriess.map((edge, index) => { return <li>{_renderItem(edge, latestSeriess.length === index + 1)}</li> })}
                </ul>
            </div>
        </div>
    )
}


function LatestSeriess({ latestSeriess }) {
    return (
        <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <div style={{ backgroundColor: "#DA2A2C", height: "1px", width: "100vw" }}></div>
            <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
                <img style={{ width: "184px", height: "43px" }} src={require('../img/lastSeriesTitle.svg')}></img>
            </div>
            <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
                {latestSeriess && latestSeriess.map(edge => (
                    <div key={edge.node.fields.slug} className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
                        <div className="column is-4"
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
                        <div className="column is-8">
                            <Img style={{ height: "15rem" }} fluid={edge.node.frontmatter.bannerImage.childImageSharp.fluid} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}