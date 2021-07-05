
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SelectItem from '../components/Series/SelectItem'
import { formatMoney } from '../util/util';

// 选手榜
export default ({ data }) => {

    const series = data.series.edges.map(edge => edge.node.frontmatter);
    const [curSerie, setCurSerie] = useState(series && series[0]);
    const [payouts, setPayouts] = useState([]); // 当前系列前十名奖励最多的玩家

    useEffect(() => {
        let payoutsDict = {}
        for (let index = 0; index < curSerie.events.length; index++) {
            const { payouts } = curSerie.events[index];
            if (!payouts || payouts.length == 0) continue;
            for (let j = 0; j < payouts.length; j++) {
                const curPayout = payouts[j];
                const prePayout = payoutsDict[curPayout.memberId];
                if (prePayout) {
                    // 同一个人，在当前系列的多场比赛中均获奖，累加
                    prePayout.amount += curPayout.amount;
                } else {
                    // 这里注意要深拷贝，否则会改变原数据
                    payoutsDict[curPayout.memberId] = { ...curPayout };
                }
            }
        }
        let payouts = Object.values(payoutsDict);
        payouts = payouts.sort((p1, p2) => p2.amount - p1.amount).slice(0, Math.min(10, payouts.length))
        setPayouts(payouts);
    }, [curSerie])

    return (
        <Layout type='xsb'>
            <div className='xsbPage'>
                <img style={{ width: '100%', height: '400px' }} src={'/img/mainbanner.jpg'} />
                <div className='xsb-content'>
                    <h1>选手榜</h1>
                    <TopView
                        series={series}
                        firstPayout={payouts.length && payouts[0]}
                        curSerie={curSerie}
                        selectAction={s => {
                            if (s === curSerie) return;
                            setCurSerie(s);
                        }}
                    />
                    <List currency={curSerie.currency} payouts={payouts} />
                </div>
                <div className='bg-view-box'>
                    <div className='item1'></div>
                    <div className='item2'></div>
                    <div className='item3'></div>
                </div>
            </div>
        </Layout>
    )
}

const List = ({ currency, payouts }) => {
    return (
        <ul>
            <li className='header-item'>
                <p style={{ flex: 215 / 1200 }}>排名</p>
                <p style={{ flex: 379 / 1200 }}>获奖者</p>
                <p style={{ flex: 279 / 1200 }}>国家</p>
                <p style={{ flex: 319 / 1200 }}>奖金 ({currency})</p>
            </li>
            {
                payouts.map((payout, i) => {
                    let topThreeColor = i == 0 ? '#f7a929' : (i == 1 ? '#8a8c8e' : '#c06e4e');
                    let ranks = ['冠軍', '亞軍', '季軍'];
                    let isTopThree = i < 3;
                    return (
                        <li className='other-item' key={i} style={isTopThree ? { backgroundColor: topThreeColor } : {}}>
                            <div className='rank' style={{ flex: 215 / 1200, }}>
                                <p className={`${isTopThree ? 'topThree' : ''}`}>{isTopThree ? ranks[i] : i + 1}</p>
                            </div >
                            <div className='name' style={{ flex: 379 / 1200 }}>
                                <img src={payout.avatar} style={{ display: isTopThree ? 'block' : 'none' }}></img>
                                <p>{payout.name}</p>
                            </div>
                            <p style={{ flex: 279 / 1200 }}>{payout.nationality}</p>
                            <p style={{ flex: 319 / 1200 }}>{formatMoney(payout.amount)}</p>
                            <div style={{ display: i < 2 ? 'block' : 'none' }} className='topThreeLine'></div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const TopView = ({ series, firstPayout, curSerie, selectAction }) => {
    const options = series.map(s => s.title);
    return (
        <div className='topBox'>
            <div className='left'>
                <img style={{ width: '828px', height: '572px' }} src={'/img/mainbanner.jpg'} ></img>
            </div>
            <div className='right'>
                <SelectItem placeholder='选择赛事' value={curSerie.title} datas={options}
                    select={t => {
                        let target = series.find(s => s.title === t)
                        selectAction && selectAction(target);
                    }}
                />
                <div className='rightBottom'>
                    <p className='eventname'>{curSerie.title}</p>
                    <p className='name'>{firstPayout.name}</p>
                    <div className='iconbox'>
                        <div className='national'>
                            <img className='nationalIcon' src={require('../img/national.svg')}></img>
                            <p>{firstPayout.nationality}</p>
                        </div>
                        <div className='national'>
                            <img className='moneyIcon' src={require('../img/amountmoney.svg')}></img>
                            <p>{formatMoney(firstPayout.amount)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query xsbQuery {
    series:allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] },
        filter: {frontmatter: {templateKey: {eq: "series-page"}}}
      ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            currency
            objectId
            events {
              no
              objectId
              title
              type
              startTime
              startingChips
              buyin
              bounty
              adminFee
              reEntry
              staffFee
              boundEventEntries
              boundEventPlayers
              boundEventPrizePools
              boundEventRemain
              rounds
              payouts{
                  memberId
                  rank
                  amount
                  nationality
                  name
                  avatar
              }
            }
          }
        }
      }
    }
  }
`
