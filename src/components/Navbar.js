import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import weibo from '../img/social/weibo.svg'
import langauge from '../img/social/langauge.svg'
import eight from '../img/social/8.svg'
import playButton from '../img/play-button.svg'
import home from '../img/home.svg'


const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }

        let paths = ['/', '/offline', '/blog', '/online', '/others/xsb', '/others/about', '/others/guide'];
        // 该文件在编译阶段会执行，属于node环境，无法访问window变量
        let locationPath = global.location?.pathname || '';
        this.navBgs = {};
        paths.forEach(p => {
            if (p === locationPath || (locationPath.includes('/offline') && p.includes('/offline'))) {
                this.navBgs[p] = { backgroundColor: '#b52222' };
            } else {
                this.navBgs[p] = {}
            }
        })
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: 'is-active',
                    })
                    : this.setState({
                        navBarActiveClass: '',
                    })
            }
        )
    }

    render() {
        return (
            <div >
                <div style={{ backgroundColor: "#000", width: "100%", height: "110px" }}>
                    <div style={{ width: '1200px', margin: '0 auto', height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <img src={logo} alt="Poker Web" style={{ width: '186px', height: "48px", margin: "31px 0 31px 0" }} />
                        <div style={{ marginTop: "57px", }}>
                            <a title="langauge" href="https://langauge.com">
                                <img
                                    src={langauge}
                                    style={{ width: '27px', height: '27px' }}
                                />
                            </a>
                            <a title="eight" href="https://eight.com">
                                <img
                                    src={eight}
                                    style={{ width: '27px', height: '27px', marginLeft: '16px' }}
                                />
                            </a>
                            <a title="facebook" href="https://facebook.com">
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    style={{ width: '27px', height: '27px', marginLeft: '16px' }}
                                />
                            </a>
                            <a title="instagram" href="https://instagram.com">
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    style={{ width: '27px', height: '27px', marginLeft: '16px' }}
                                />
                            </a>
                            <a title="weibo" href="https://weibo.com">
                                <img
                                    src={weibo}
                                    alt="Weigo"
                                    style={{ width: '27px', height: '27px', marginLeft: '16px' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="full-width-navbar-container">
                    <div style={{ width: '1200px', margin: '0 auto', height: '100%' }}>
                        <nav
                            className="navbar is-primary"
                            role="navigation"
                            aria-label="dropdown navigation"
                            style={{ height: '100%' }}
                        >
                            <Link className="navbar-item" to="/" title="Home"
                                style={{ padding: '0 20px', ...{ ...this.navBgs['/'] } }}
                            >
                                <img
                                    src={home}
                                    alt="Home"
                                    style={{ width: "22px", height: "21px", objectFit: "contain" }}
                                />
                            </Link>
                            <div
                                id="navMenu"
                                className={`navbar-menu ${this.state.navBarActiveClass}`}
                            >
                                <div className="navbar-start has-text-centered">
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <div className="navbar-link is-arrowless" style={{
                                            fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                                            paddingRight: "24px", paddingLeft: "24px", ...{ ...this.navBgs['/offline'] }
                                        }}>線下賽事</div>
                                        <div className="navbar-dropdown is-boxed navDropDrown">
                                            <Link className="navDrownItem" to="/offline/rd-jeju/">红龙杯济州站</Link>
                                            <div style={{ height: '1px', backgroundColor: 'white', margin: '0 15px', opacity: 0.4 }} />
                                            <Link className="navDrownItem" to="/offline/rd-manila">红龙杯马尼拉站</Link>
                                            <div style={{ height: '1px', backgroundColor: 'white', margin: '0 15px', opacity: 0.4 }} />
                                            <Link className="navDrownItem" to="/offline/appt-jeju">APPT济州站</Link>
                                        </div>
                                    </div>
                                    <Link className="navbar-item" to="/online" style={{
                                        fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                                        paddingRight: "24px", paddingLeft: "24px", ...{ ...this.navBgs['/online'] }
                                    }}> 線上賽事</Link>
                                    <Link className="navbar-item" to="/blog" style={{
                                        fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                                        paddingRight: "24px", paddingLeft: "24px", ...{ ...this.navBgs['/blog'] }
                                    }}>BLOG</Link>
                                    <Link className="navbar-item" to="/others/xsb" style={{
                                        fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                                        paddingRight: "24px", paddingLeft: "24px", ...{ ...this.navBgs['/others/xsb'] }
                                    }}>選手榜</Link>
                                    <Link className="navbar-item" to="/others/about" style={{
                                        fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                                        paddingRight: "24px", paddingLeft: "24px", ...{ ...this.navBgs['/others/about'] }
                                    }}>關於我們</Link>
                                </div>
                                <div className="navbar-end" style={{}}>
                                    <Link to="/others/guide"  >
                                        <div style={{ display: 'flex', backgroundColor: 'rgba(129,18,19,0.7)', width: '128px', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={require('../img/guideIcon.svg')} style={{ width: "10px", height: "11px", marginRight: '12px' }} />
                                            <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', fontFamily: 'Noto Sans TC' }}>LIVE</p>
                                        </div>
                                    </Link>
                                    <Link to="/others/rule"  >
                                        <img src={playButton} style={{ width: "200px", height: "65px" }} />
                                    </Link>
                                </div>
                            </div>
                        </nav >
                    </div>
                </div>

            </div >
        )
    }
}

export default Navbar
