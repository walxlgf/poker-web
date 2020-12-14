import React, { useState } from 'react'

export default ({ category }) => {
    return (
        <div className='s-summary-box' >
            <h1>赛事简介</h1>
            <CategorySummary category={category} />
            <MainEvents />
            <div className='s-rdpt'>
                <div className='s-rdpt-content'>
                </div>
            </div>
            <DescList />
        </div>
    )
}

const CategorySummary = ({ category }) => {
    let others = category.others || '';
    others = others.split('|');
    return (
        <div className='s-category-summary'>
            <div className='left'>
                <h4>{category.title}</h4>
                <div className='image-text'>
                    <img style={{ width: '35px', height: '30px' }} src={require('../../img/summary-calendar.svg')}></img>
                    <p >{category.date}</p>
                </div>
                <div className='image-text'>
                    <img style={{ width: '33px', height: '32px' }} src={require('../../img/summary-price.svg')}></img>
                    <p>{`${category.currency}  ${category.prize}`}</p>
                </div>
                <div className='image-text'>
                    <img style={{ width: '29px', height: '33px' }} src={require('../../img/summary-location.svg')}></img>
                    <p>{category.address}</p>
                </div>
                {
                    others.map((text, index) => {
                        let sps = text.split(':');
                        if (sps.lenght == 1) sps = text.split('：');
                        return <p key={index}>{sps[0]}:&nbsp;&nbsp;&nbsp;{sps[1]}</p>
                    })
                }
            </div>
            <div className='right'>
                <img src={require('../../img/seriesPlaceholder.jpeg')} />
            </div>
        </div>
    )
}

const MainEvents = () => {
    return (
        <div className='s-main-events'>
            <h3>重點賽事</h3>
            <ul className='s-main-list'>
                <li>
                    <p>賽事名稱</p>
                    <p>賽事時間</p>
                    <p>買入(韓元)</p>
                    <p>保証金總獎池(韓元)</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
                <li>
                    <p>超级豪客赛</p>
                    <p>19-25 Jun 2020</p>
                    <p>4000000</p>
                    <p>600000000</p>
                </li>
            </ul>
            <div className='more'>
                查看更多賽程
            </div>
        </div>
    )
}


const DESCS = [
    {
        title: '比賽規則',
        img: require('../../img/location.png'),
        texts: [
            '要什下務經人收價，而笑目光必具重行一行小費還說生你自因不位會，近力著動歷上遊,還說生你自因不位會，近力著動歷上遊,還說生你自因不位會，近力著動歷上遊；',
            '品燈總是解毛民，中就帶遠種，到之上題的反里但坐打神候山入一強南變下的對孩理積品立下財業學',
            '開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造；',
            '良長取生家止回年，言論親國受運一工太人是不活，不總見經腦兒已病為；',
            '中帶日水他，日制國類處是飛低企後實夜權我負開美好回府輕路兒舞散人增勢，還已當你麗子早如告去書來文紅一事；',
            '要什下務經人收價，而笑目光必具重行一行小費還說生你自因不位會，近力著動歷上遊；',
            '品燈總是解毛民，中就帶遠種，到之上題的反里但坐打神候山入一強南變下的對孩理積品立下財業學；',
            '開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造,開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造；,開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造；'
        ]
    },
    {
        title: '買入金額(韓元)',
        img: require('../../img/location.png'),
    },
    {
        title: '住宿資料',
        img: require('../../img/location.png'),
    },
    {
        title: '場地交通',
        img: require('../../img/location.png'),
    },
    {
        title: '場地資訊',
        img: require('../../img/location.png'),
    },
]
const DescList = () => {
    const [selectItems, setSelectItems] = useState([true]);
    return (
        <ul className='s-desc-list'>
            {
                DESCS.map((desc, i) => {
                    let isExpand = selectItems[i];
                    return (
                        <li key={i}>
                            <div className='header'
                                style={isExpand ? { borderBottom: 'none' } : {}}
                                onClick={() => {
                                    selectItems[i] = !selectItems[i];
                                    setSelectItems([...selectItems]);
                                }}>
                                <div className='left'>
                                    <img src={desc.img}></img>
                                    <p>{desc.title}</p>
                                </div>
                                <i className={isExpand ? 'active' : ''}></i>
                                <b className='triangle-down' style={{ display: isExpand ? 'block' : 'none' }}></b>
                            </div>
                            <div className='desc' style={{ height: selectItems[i] ? 'auto' : '0px' }}>
                                <div className='inner'>
                                    {
                                        desc.texts && desc.texts.map((text, index) => {
                                            return (
                                                <div key={index}>
                                                    <p>{`${String.fromCharCode(97 + index)}.`}</p>
                                                    <p>{text}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
