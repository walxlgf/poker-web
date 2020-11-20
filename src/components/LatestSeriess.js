import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/index-page.scss'


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"];

export default ({ latestSeriess }) => {

    const _formatDate = (dateStr) => {
        let date = new Date(dateStr);
        let day = date.getDate();
        if (day < 10) day = '0' + day;
        let dateArr = [day, months[date.getMonth()], date.getFullYear()]
        return dateArr.join(' ')
    }

    const _renderItem = (edge, isLastItem) => {
        let { date, price, address, description, title, bannerImage } = edge.node.frontmatter;
        return (
            <div className='t-itemContainer' style={{ marginBottom: isLastItem ? '0px' : '60px' }}>
                <div className='t-itemLeft'>
                    <h3 className='t-title'> {title} </h3>
                    <p className='t-desc'>{description}</p>
                    <div className='t-priceContainer' style={{ display: price ? 'block' : 'none' }}>
                        <span className='t-text'>奖金</span>
                        <p className='t-amount'>{price}</p>
                    </div>
                    <Link className='t-toDetail' to={edge.node.fields.slug} >最新晉級名單</Link>
                </div>
                <div className='t-itemRight'>
                    <Img className='t-image' fluid={bannerImage.childImageSharp.fluid} />
                    <div className='t-timeFlag'>
                        {address}
                        <span className='t-line'>|</span>
                        {_formatDate(date)}
                    </div>
                    <div className='t-arrowContainer'>
                        <div style={{ padding: '15px' }}><img src={require('../img/arrow_left.png')} /></div>
                        <div style={{ padding: '15px' }}> <img src={require('../img/arrow_right.png')} /></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='latestseries'>
            <div className='t-content' >
                <div className='t-header'>
                    <img src={require('../img/lastSeriesTitle.svg')}></img>
                </div>
                <ul style={{ listStyle: 'none' }}>
                    {latestSeriess && latestSeriess.map((edge, index) => { return <li>{_renderItem(edge, latestSeriess.length === index + 1)}</li> })}
                </ul>
            </div>
        </div>
    )
}

/*
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
*/