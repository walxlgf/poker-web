import React, { useState, useEffect } from 'react'
import '../../styles/offline-page.scss';
import { SelectView } from './Schedule'

export default () => {
    return (
        <div className='s-list-result  s-result-box' >
            <h1>赛事结果</h1>
            <SelectView />
            <List />
            <div className='s-more'>查看更多</div>
        </div>
    )
}

const List = ({ datas }) => {
    return (
        <ul>
            <li>
                <p>排名</p>
                <p>获奖者</p>
                <p>国家</p>
                <p>奖金</p>
            </li>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, i) => {
                    return (
                        <li key={i}>
                            <p>{i + 1}</p>
                            <p>zhang maliang</p>
                            <p>中国</p>
                            <p>60,000,00</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}