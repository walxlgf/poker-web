import React, { useEffect, useMemo, useState } from "react"
import { Link } from 'gatsby'
import '../../styles/index-page.scss'
import { Months } from '../../util/consts'
import "animate.css";
import { HoverAnimationView, PlaceHolderImg, formatMoney } from '../../util/util'
import Bus, { EVENTS } from '../../util/eventBus.js'


export default ({ data }) => {

    const [isShow, setIsShow] = useState(true)

    useEffect(() => {
        Bus.addListener(EVENTS.bgAnimationView, (index) => {
            if (index != 0) return; // 监听第一个色块的出现
            setIsShow(true);
        });
    }, [])

    const _formatDate = (dateStr) => {
        let date = new Date(dateStr);
        let day = date.getDate();
        if (day < 10) day = '0' + day;
        let dateArr = [day, Months[date.getMonth()], date.getFullYear()]
        return dateArr.join(' ')
    }

    const _addressOfCategory = (category) => {
        if (category === 'appt-jeju') {
            return '济州站'
        } else if (category === 'rd-jeju') {
            return '济州站'
        } else if (category === 'rd-manila') {
            return '马尼拉站'
        }
        return ''
    }

    const _renderItem = (edge, isLastItem) => {
        let { date, prize, category, description, title, seriesImage, currency } = edge.node.frontmatter;
        let flagStyle = isLastItem ? { right: 0, left: 'auto' } : {}
        return (
            <div className={`t-itemContainer animate__animated ${isShow ? 'animate__fadeIn' : ''}`}
                style={{ marginBottom: isLastItem ? '0px' : '60px' }}>
                <div className='t-itemLeft'>
                    <h3 className={`t-title`}> {title} </h3>
                    <p className='t-desc'>{description}</p>
                    <div className='t-prizeContainer' style={{ display: prize ? 'block' : 'none' }}>
                        <span className='t-text'>奖金</span>
                        <p className='t-amount'>{`${currency} ${formatMoney(prize)}`}</p>
                    </div>
                    <Link className='t-toDetail' /*to={edge.node.fields.slug} */>
                        <HoverAnimationView>最新晉級名單</HoverAnimationView>
                    </Link>
                </div>
                <div className={`t-itemRight`}>
                    <a><PlaceHolderImg className='t-image' src={seriesImage} plscr={require('../../img/seriesPlaceholder.jpeg')} /></a>
                    <div className='t-timeFlag' style={flagStyle}>
                        {_addressOfCategory(category)}
                        <span className='t-line'>|</span>
                        {_formatDate(date)}
                    </div>
                    <div className='t-arrowContainer'>
                        <div style={{ padding: '15px' }}><img src={require('../../img/arrow_left.png')} /></div>
                        <div style={{ padding: '15px' }}> <img src={require('../../img/arrow_right.png')} /></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!data || data.length == 0) return null;
    return (
        <div className='latestseries'>
            <div className='t-content' >
                <div className={`t-header animate__animated animate__bounceInRight`}>
                    <img src={require('../../img/lastSeriesTitle.svg')}></img>
                </div>
                <ul style={{ listStyle: 'none' }}>
                    {data && data.map((edge, i) => { return <li key={i}>{_renderItem(edge, data.length === i + 1)}</li> })}
                </ul>
            </div>
        </div>
    )
}
