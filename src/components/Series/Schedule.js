import React, { useState } from 'react'
import moment from "moment"
import { Collapse, Table, Select } from 'antd';
const { Option } = Select;
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
const expandedRowRender = (record) => {
    const columns1 = [
        {
            title: '再买入次数',
            dataIndex: 'reEntry',
            key: 'reEntry',
            width: 120,
            align: 'center',
        },
        {
            title: '起始盲注',
            dataIndex: 'startBlind',
            key: 'startBlind',
            width: 120,
            ellipsis: true,
            align: 'center',
        },
        {
            title: '延迟买入',
            dataIndex: 'stopLevel',
            key: 'stopLevel',
            width: 120,
            ellipsis: true,
            align: 'center',
        },
        {
            title: `盲注升级时间`,
            dataIndex: 'duration',
            key: 'duration',
            width: 120,
            align: 'center',
        },

        {
            title: '幸存资格',
            dataIndex: 'survivor',
            key: 'survivor',
            width: 120,
            align: 'center',
        },
    ];

    return <Table columns={columns1} dataSource={[record]} pagination={false} />;
};
export default ({ seriess, categories, category }) => {
    const [currentCategory, setCategory] = useState(category);
    const [categorySeriess, setCategorySeriess] = useState(category && seriess ? seriess.filter(series => series.category === category.categoryKey) : []);
    const [currentSeries, setSeries] = useState(categorySeriess ? categorySeriess[0] : undefined);
    let { events } = currentSeries ? currentSeries : {};
    //先按日期排序
    events && events.sort((a, b) => {
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

    //分组
    let groups = [];
    if (events && events.length > 0) {
        let group = { events: [{ ...events[0], key: 0 }], label: moment(events[0].startTime).format("YYYY-MM-DD") };
        groups.push(group);
        let index = 1;
        for (let i = 1; i < events.length; i++) {
            const event = events[i];
            if (group.label === moment(event.startTime).format("YYYY-MM-DD")) {
                group.events.push({ ...event, key: index++ });
            } else {
                index = 0;
                group = { events: [{ ...event, key: index++ }], label: moment(event.startTime).format("YYYY-MM-DD") };
                groups.push(group);
            }
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", border: "1px dotted green" }}>

            <div style={{ display: "flex", width: "100%", padding: "2rem", flexDirection: "row", alignItems: "center", justifyContent: "center", border: "1px dotted blue" }}>
                {categories &&
                    <Select
                        defaultValue={currentCategory.categoryKey}
                        style={{ width: 240 }}
                        onChange={value => {
                            let category = categories.find(item => item.categoryKey === value);
                            let categorySeriess = category && seriess ? seriess.filter(series => series.category === category.categoryKey) : []
                            let currentSeries = categorySeriess ? categorySeriess[0] : undefined;
                            setCategory(category);
                            setCategorySeriess(categorySeriess);
                            setSeries(currentSeries);
                        }}
                    >
                        {categories.map(item => <Option key={item.categoryKey} value={item.categoryKey}>{item.title}</Option>)}
                    </Select>}
                {categorySeriess &&
                    <Select
                        defaultValue={currentSeries && currentSeries.title}
                        style={{ width: 240 }}
                        onChange={value => {
                            let currentSeries = categorySeriess.find(item => item.title === value);
                            setSeries(currentSeries);
                        }}
                    >
                        {categorySeriess.map(item => <Option key={item.title} value={item.title}>{item.title}</Option>)}
                    </Select>}
            </div>

            {groups.length &&
                <Collapse accordion defaultActiveKey={groups[0].label}>
                    {groups.map(group => (
                        <Panel header={group.label} key={group.label} >
                            <Table
                                dataSource={group.events}
                                columns={columns}
                                pagination={false}
                                expandable={{
                                    expandedRowRender
                                }}
                            />
                        </Panel>))}
                </Collapse>
            }
        </div>
    );
}