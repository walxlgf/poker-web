import React from 'react'
import moment from "moment"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Collapse, Table, } from 'antd';
const { Panel } = Collapse;
const columns = [
    {
        title: '开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
        width: 120,
        align: 'left',
        renderText: (text, record) => moment(text).format('HH:mm'),
    },
    {
        title: '编号',
        dataIndex: 'no',
        key: 'no',
        width: 80,
        ellipsis: true,
        align: 'left',
    },
    {
        title: '赛事名称',
        dataIndex: 'title',
        key: 'title',
        width: 250,
        ellipsis: true,
        align: 'left',
    },
    {
        title: `买入`,
        dataIndex: 'buyin',
        key: 'buyin',
        width: 120,
        align: 'right',
    },

    {
        title: '起始筹码',
        dataIndex: 'startChips',
        key: 'startChips',
        width: 80,
        align: 'center',
    },

    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: 80,
        align: 'center',
    },
];

import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import vimeo from '../../img/social/vimeo.svg'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';


export default ({ category, latestSeries }) => {
    const { events, bannerImage } = latestSeries ? latestSeries : {};
    const { title, address, addressEN, phone } = category ? category : {};
    console.log(`Summary:title:${JSON.stringify(title)}`);
    // let filterEvents = events ? events.filter(event => event.isMain) : [];
    let filterEvents = [];
    let index = 0;
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        if (event.isMain)
            filterEvents.push({ ...event, key: index++ });
    }

    //先按日期排序
    filterEvents && filterEvents.sort((a, b) => {
        let aday = moment(a.startTime);
        let bday = moment(b.startTime);
        let result = 0;
        if (bday.startOf('day').isBefore(aday.startOf('day')))
            result = 1;
        else if (bday.startOf('day').isSame(aday.startOf('day')))
            result = 0;
        else
            result = -1;
        return result;
    });


    return (
        <div className="container is-max-desktop" style={{ backgroundColor: "#1a1a1a" }}>
            <div className="container is-max-desktop" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
                <div className="title" style={{ border: "1px dotted orange" }}>最新赛事</div>
            </div>
            <div className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
                <div className="column is-4"
                    style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", border: "1px dotted orange" }}>
                    <div className="title">
                        {title}
                    </div>
                    <div className="subtitle">
                        {address}
                    </div>
                    <div className="subtitle">
                        {addressEN}
                    </div>
                    <div className="subtitle">
                        {phone}
                    </div>
                </div>
                <div className="column is-8">
                    <Img style={{ height: "15rem" }} fluid={bannerImage.childImageSharp.fluid} />
                </div>
            </div>
            <div className="container is-max-desktop" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
                <div className="title" style={{ border: "1px dotted orange" }}>重点赛事</div>
            </div>
            <Table
                dataSource={filterEvents}
                columns={columns}
                pagination={false}
            />
            <div className="container is-max-desktop" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
                <Link to={"/"}>
                    <button className="button is-primary is-inverted is-outlined">查看更多赛事</button>
                </Link>
            </div>

            <div className="container is-max-desktop"
                style={{
                    width: "100%",
                    height: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dotted blue",
                    backgroundImage: `url(${require(`../../../static/img/${bannerImage.relativePath}`)})`,
                }}>
                <h1 className="title">RDPT专题</h1>
                <h1 className="title">关注获取最新消息</h1>
                <div className="social">
                    <a title="facebook" href="https://facebook.com">
                        <img
                            src={facebook}
                            alt="Facebook"
                            style={{ width: '1em', height: '1em' }}
                        />
                    </a>
                    <a title="twitter" href="https://twitter.com">
                        <img
                            className="fas fa-lg"
                            src={twitter}
                            alt="Twitter"
                            style={{ width: '1em', height: '1em' }}
                        />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                        <img
                            src={instagram}
                            alt="Instagram"
                            style={{ width: '1em', height: '1em' }}
                        />
                    </a>
                    <a title="vimeo" href="https://vimeo.com">
                        <img
                            src={vimeo}
                            alt="Vimeo"
                            style={{ width: '1em', height: '1em' }}
                        />
                    </a>
                </div>
            </div>

            <Collapse accordion defaultActiveKey='0' style={{ marginTop: "1rem" }}>
                <Panel header={<span><AppleOutlined />比赛规则</span>} key='0' >
                    <ol type="a">
                        <li>first item</li>
                        <li>second item</li>
                        <li>third item</li>
                        <li>third item</li>
                        <li>third item</li>
                        <li>third item</li>
                        <li>third item</li>
                        <li>third item</li>
                    </ol>
                </Panel>
                <Panel header={<span><AndroidOutlined />住宿资料</span>} key='1' >
                </Panel>
                <Panel header={<span><AndroidOutlined />场地交通</span>} key='2' >

                </Panel>
                <Panel header={<span><AndroidOutlined />场地资讯</span>} key='3' >

                </Panel>
            </Collapse>
        </div>
    );
}