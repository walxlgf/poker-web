import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import weibo from '../img/social/weibo.svg'
import eight from '../img/social/8.svg'
import rdlogo from '../img/red-dragon-logo.png'
import pslogo from '../img/poker-stars-logo.png'
import { CommonButton } from '../util/util'



const Footer = class extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#262626" }}>
                <div style={{ width: '1200px', margin: '0 auto' }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "67px" }}>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "266px", width: "187px", }}>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                        }}
                                            to="/">首頁</Link>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                        }} to="/offline/rd-jeju">線下賽事</Link>
                                        <Link
                                            to="/offline/rd-jeju"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >红龙杯济州站</Link>

                                        <Link
                                            to="/offline/rd-manila"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >红龙杯马尼拉站</Link>
                                        <Link
                                            to="/offline/appt-jeju"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >APPT济州站</Link>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "266px", width: "187px" }}>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                        }}
                                            to="/">线上赛事</Link>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                        }} to="/offline/rd-jeju">BLOG</Link>
                                        <Link
                                            to="/blog?index=0"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >新闻</Link>

                                        <Link
                                            to="/blog?index=1"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >视频</Link>
                                        <Link
                                            to="/blog?index=2"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >相册</Link>
                                        <Link
                                            to="/blog?index=3"
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                            }}
                                        >实时报导</Link>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "266px", width: "187px" }}>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                        }}
                                            to="/others/xsb">选手榜</Link>
                                        <Link style={{
                                            color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                                        }} to="/others/about">关于我们</Link>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                        <div
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                            }}>關注我們</div>
                                        <div style={{ marginTop: "4px" }}>
                                            <a title="eight" href="https://eight.com">
                                                <img
                                                    src={eight}
                                                    style={{ width: '37px', height: '37px' }}
                                                />
                                            </a>
                                            <a title="facebook" href="https://facebook.com">
                                                <img
                                                    src={facebook}
                                                    alt="Facebook"
                                                    style={{ width: '37px', height: '37px', marginLeft: '22px' }}
                                                />
                                            </a>
                                            <a title="instagram" href="https://instagram.com">
                                                <img
                                                    src={instagram}
                                                    alt="Instagram"
                                                    style={{ width: '37px', height: '37px', marginLeft: '22px' }}
                                                />
                                            </a>
                                            <a title="weibo" href="https://weibo.com">
                                                <img
                                                    src={weibo}
                                                    alt="Weigo"
                                                    style={{ width: '37px', height: '37px', marginLeft: '22px' }}
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ marginLeft: "75px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                        <div
                                            style={{
                                                color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                            }}>合作伙伴</div>
                                        <div style={{ marginTop: "4px" }}>
                                            <a title="reddragon" href="https://reddragon.com">
                                                <img
                                                    src={rdlogo}
                                                    alt="RedDragon"
                                                    style={{ width: '46px', height: '45px', marginLeft: '22px' }}
                                                />
                                            </a>
                                            <a title="PokerStars" href="https://PokerStars.com"
                                                style={{ marginLeft: '30px' }}>
                                                <img
                                                    src={pslogo}
                                                    alt="PokerStars"
                                                    style={{ width: '94px', height: '40px' }}
                                                />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div style={{ width: "422px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                <div style={{
                                    color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                                }}>聯絡我們</div>
                                <input style={{
                                    color: "#fff", backgroundColor: "#333333", width: "422px",
                                    height: "47px", outline: 'none', paddingLeft: '15px', border: 'none'
                                }} placeholder='電郵' />
                                <textarea style={{
                                    color: "#fff", backgroundColor: "#333333", width: "422px", height: "135px",
                                    marginTop: "27px", outline: 'none', paddingLeft: '15px', paddingTop: '10px', border: 'none', resize: 'none'
                                }} placeholder='信息' />
                                <CommonButton text='發送信息' style={{ marginTop: '29px', borderColor: 'rgba(255,255,255,0.6)' }} />
                            </div>
                        </div>

                        <div style={{ width: "100%", margin: "42px 0 19px", boxShadow: '0px 0px 0px .7px #db2c2d' }}></div>
                        <div
                            style={{
                                width: "100%", height: "55px", marginBottom: "28px", color: "#fff", fontFamily: "Noto Sans TC",
                                fontSize: "15px", fontWeight: 300, margin: '0 0 28px 0', display: 'flex', alignItems: 'center'
                            }}>
                            <div className="column is-8" style={{ display: "flex", paddingLeft: 0 }}>
                                <div >Copyright © 2020 Red Dragon Poker Tour 保留所有權利。</div>
                                <div style={{ marginLeft: '20px' }}></div>
                                <div>私隱政策</div>
                                <div style={{ margin: "0px 8px 0px 8px", opacity: 0.5 }}>I</div>
                                <div>賽事規則</div>
                                <div style={{ margin: "0px 8px 0px 8px", opacity: 0.5 }}>I</div>
                                <div>媒體指南</div>
                            </div>
                            <div className="column is-4" style={{ display: "flex", justifyContent: "flex-end", paddingRight: 0 }}>
                                <div>繁體</div>
                                <div style={{ margin: "0px 8px 0px 8px", opacity: 0.5 }}>I</div>
                                <div>簡體</div>
                                <div style={{ margin: "0px 8px 0px 8px", opacity: 0.5 }}>I</div>
                                <div>ENG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
