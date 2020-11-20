import React, { useMemo } from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/index-page.scss'
import { Months } from '../util/consts'

export default ({ data }) => {

    const _formatDate = (dateStr) => {
        let date = new Date(dateStr);
        let day = date.getDate();
        if (day < 10) day = '0' + day;
        let dateArr = [day, Months[date.getMonth()], date.getFullYear()]
        return dateArr.join(' ')
    }

    const _renderItem = (edge, isLastItem) => {
        let { date, prize, address, description, title, bannerImage } = edge.node.frontmatter;
        return (
            <div className='t-itemContainer' style={{ marginBottom: isLastItem ? '0px' : '60px' }}>
                <div className='t-itemLeft'>
                    <h3 className='t-title'> {title} </h3>
                    <p className='t-desc'>{description}</p>
                    <div className='t-prizeContainer' style={{ display: prize ? 'block' : 'none' }}>
                        <span className='t-text'>奖金</span>
                        <p className='t-amount'>{prize}</p>
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
                    {data && data.map((edge, i) => { return <li key={i}>{_renderItem(edge, data.length === i + 1)}</li> })}
                </ul>
            </div>
        </div>
    )
}
