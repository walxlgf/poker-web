import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import weibo from '../img/social/weibo.svg'
import eight from '../img/social/8.svg'
import rdlogo from '../img/red-dragon-logo.png'
import pslogo from '../img/poker-stars-logo.png'
const Footer = class extends React.Component {
  render() {
    return (
      // <footer className="footer has-text-white" style={{ backgroundColor: "#262626" }}>
      //   <div className="content has-text-centered">
      //     <img
      //       src={logo}
      //       alt="Kaldi"
      //       style={{ width: '14em', height: '10em' }}
      //     />
      //   </div>
      //   <div className="content has-text-centered has-text-white">
      //     <div className="container has-text-white">
      //       <div style={{ maxWidth: '100vw' }} className="columns">
      //         <div className="column is-4">
      //           <section className="menu">
      //             <ul className="menu-list">
      //               <li>
      //                 <Link to="/" className="navbar-item">
      //                   Home
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/about">
      //                   About
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/products">
      //                   Products
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact/examples">
      //                   Form Examples
      //                 </Link>
      //               </li>
      //               <li>
      //                 <a
      //                   className="navbar-item"
      //                   href="/admin/"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                 >
      //                   Admin
      //                 </a>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4">
      //           <section>
      //             <ul className="menu-list">
      //               <li>
      //                 <Link className="navbar-item" to="/blog">
      //                   Latest Stories
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact">
      //                   Contact
      //                 </Link>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4 social">
      //           <a title="langauge" href="https://langauge.com">
      //             <img
      //               src={langauge}
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="eight" href="https://eight.com">
      //             <img
      //               src={eight}
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="facebook" href="https://facebook.com">
      //             <img
      //               src={facebook}
      //               alt="Facebook"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="instagram" href="https://instagram.com">
      //             <img
      //               src={instagram}
      //               alt="Instagram"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="weibo" href="https://weibo.com">
      //             <img
      //               src={weibo}
      //               alt="Weigo"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
      <div style={{ backgroundColor: "#262626" }}>
        <div className="container is-max-widescreen">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "67px", paddingLeft: "40px", marginRight: "43px" }}>
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
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >红龙杯马尼拉站</Link>
                    <Link
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >APPT济州站</Link>
                    <Link
                      to="/offline/rd-jeju"
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
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >新闻</Link>

                    <Link
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >视频</Link>
                    <Link
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >相册</Link>
                    <Link
                      to="/offline/rd-jeju"
                      style={{
                        color: "#fff", fontFamily: "Noto Sans TC", fontSize: "14.5px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                      }}
                    >实时报导</Link>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "266px", width: "187px" }}>
                    <Link style={{
                      color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '55px', letterSpacing: 'normal',
                    }}
                      to="/">选手榜</Link>
                    <Link style={{
                      color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500, fontStretch: 'normal', fontStyle: 'normal', lineHeight: '36.5px', letterSpacing: 'normal',
                    }} to="/offline/rd-jeju">关于我们</Link>
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
                  color: "#fff", backgroundColor: "#333333", width: "422px", height: "47px"
                }} />
                <input style={{
                  color: "#fff", backgroundColor: "#333333", width: "422px", height: "135px", marginTop: "27px"
                }} />

                <div style={{
                  width: "250px", height: "65px", marginTop: "29px", border: "1px solid #fff"
                }} >
                  <div style={{
                    textAlign: 'center', width: "100%", marginTop: "19px",
                    color: "#fff", fontFamily: "Noto Sans TC", fontSize: "16px", fontWeight: 500,
                  }}>發送信息</div>
                </div>
              </div>
            </div>
            <div style={{ height: "1px", width: "100%", margin: "42px 0 19px", border: "1px solid #db2c2d" }}></div>
            <div className="columns" style={{ width: "100%", height: "55px", marginBottom: "28px", color: "#fff", fontFamily: "Noto Sans TC", fontSize: "15px", fontWeight: 300, fontStretch: 'normal', }}>
              <div className="column is-5" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                <div >Copyright © 2020 Red Dragon Poker Tour 保留所有權利。</div>
              </div>
              <div className="column is-3" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                <div>私隱政策</div>
                <div style={{ margin: "0px 4px 0px 4px" }}>I</div>
                <div>賽事規則</div>
                <div style={{ margin: "0px 4px 0px 4px" }}>I</div>
                <div>媒體指南</div>
              </div>
              <div className="column is-4" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end" }}>
                <div>繁體</div>
                <div style={{ margin: "0px 4px 0px 4px" }}>I</div>
                <div>簡體</div>
                <div style={{ margin: "0px 4px 0px 4px" }}>I</div>
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
