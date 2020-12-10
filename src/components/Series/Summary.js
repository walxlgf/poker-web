import React, { useState } from 'react'

export default () => {
    return (
        <div className='s-summary-box' >
            <h1>赛事简介</h1>
            <CategorySummary />
            <MainEvents />
            <div className='s-rdpt'>
                <div className='s-rdpt-content'>
                </div>
            </div>
            <DescList />
        </div>
    )
}

const CategorySummary = () => {
    return (
        <div className='s-category-summary'>
            <div className='left'>
                <h4>紅龍杯冠軍賽濟洲站</h4>
                <div className='image-text'>
                    <img src={require('../../img/location.png')}></img>
                    <p >23 Aug 2020</p>
                </div>
                <div className='image-text'>
                    <img src={require('../../img/location.png')}></img>
                    <p>$3000000</p>
                </div>
                <div className='image-text'>
                    <img src={require('../../img/location.png')}></img>
                    <p>韓國濟洲話世界b假酒b鼎娛樂場韓國濟洲話世界b假酒b鼎娛樂場韓國濟洲話世界b假酒洲話世界b假酒b鼎娛樂場</p>
                </div>
                <p>聯絡電話：(+82) 64 908 8888</p>
                <p>酒店預計：(+82) 82 64 908 8800</p>
                <p>服裝規定：休閑</p>
                <p>入場年齡限制：19歲以上</p>
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
                                <i></i>
                                <b className='triangle-down' style={{ display: isExpand ? 'block' : 'none' }}></b>
                            </div>
                            <div className='desc' style={{ height: selectItems[i] ? 'auto' : '0px' }}>
                                <div className='inner'>
                                    <p>a. 	要什下務經人收價，而笑目光必具重行一行小費還說生你自因不位會，近力著動歷上遊；</p>
                                    <p>b. 	品燈總是解毛民，中就帶遠種，到之上題的反里但坐打神候山入一強南變下的對孩理積品立下財業學；</p>
                                    <p>c. 	開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造；</p>
                                    <p>d. 	良長取生家止回年，言論親國受運一工太人是不活，不總見經腦兒已病為；</p>
                                    <p>e. 	中帶日水他，日制國類處是飛低企後實夜權我負開美好回府輕路兒舞散人增勢，還已當你麗子早如告去書來文紅一事；</p>
                                    <p>f. 	要什下務經人收價，而笑目光必具重行一行小費還說生你自因不位會，近力著動歷上遊；</p>
                                    <p>g. 	品燈總是解毛民，中就帶遠種，到之上題的反里但坐打神候山入一強南變下的對孩理積品立下財業學；</p>
                                    <p>h. 	開檢心法大味，言論親國受運一工太人是不活，以定為際，則年利調古一反角廠究笑講，中做這總前讀新行造；</p>
                                    <p>i. 	良長取生家止回年，言論親國受運一工太人是不活，不總見經腦兒已病為。</p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
