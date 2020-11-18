import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

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
        {/* <div className="container is-max-widescreen" style={{ border: "1px dotted red"}}>
          <nav className="level is-mobile" style={{ border: "1px dotted green", margin: "0px", height: "3rem" }}  >
            <div className="level-left" >
              <Link to="/" className="level-item" title="Home">
                <img src={logo} alt="Poker Web" style={{ width: '88px' }} />
              </Link>
            </div>
            <div className="level-right">
              <div className="level-item" style={{ border: "1px dotted grey" }}>
                <div>
                  <a title="langauge" href="https://langauge.com">
                    <img
                      src={langauge}
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="eight" href="https://eight.com">
                    <img
                      src={eight}
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
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
                  <a title="weibo" href="https://weibo.com">
                    <img
                      src={weibo}
                      alt="Weigo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div> */}

        <div style={{ backgroundColor: "#000", width: "100%", height: "110px" }}>
          <div className="container is-max-widescreen" style={{ height: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
            <img src={logo} alt="Poker Web" style={{ width: '186px', height: "48px", margin: "31px 0 31px 0" }} />
            <div style={{ marginTop: "57px", marginRight: "40px" }}>
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
          <div className="container is-max-widescreen" >
            <nav
              className="navbar is-primary"
              role="navigation"
              aria-label="dropdown navigation"
            // style={{ marginTop: "0.0rem" }}
            >
              <div className="navbar-brand" >
                <Link className="navbar-item" to="/" title="Home">
                  <img
                    src={home}
                    alt="Home"
                    style={{ width: "22px", height: "21px", objectFit: "contain" }}
                  />
                </Link>
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link is-arrowless" style={{
                      fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                      paddingRight: "24px", paddingLeft: "24px"
                    }}>線下賽事</div>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="navbar-item" to="/offline/rd-jeju">红龙杯济州站</Link>
                      <Link className="navbar-item" to="/offline/rd-manila">红龙杯马尼拉站</Link>
                      <Link className="navbar-item" to="/offline/appt-jeju">APPT济州站</Link>
                    </div>
                  </div>
                  <Link className="navbar-item" to="/products" style={{
                    fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                    paddingRight: "24px", paddingLeft: "24px"
                  }}> 線上賽事</Link>
                  <Link className="navbar-item" to="/blog" style={{
                    fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                    paddingRight: "24px", paddingLeft: "24px"
                  }}>BLOG</Link>
                  <Link className="navbar-item" to="/about" style={{
                    fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                    paddingRight: "24px", paddingLeft: "24px"
                  }}>選手榜</Link>
                  <Link className="navbar-item" to="/about" style={{
                    fontFamily: "Noto Sans TC", fontSize: "18px", fontWeight: 300, fontStretch: 'normal', fontStyle: 'normal', lineHeight: 'normal', letterSpacing: 'normal',
                    paddingRight: "24px", paddingLeft: "24px"
                  }}>關於我們</Link>
                </div>
                <div className="navbar-end" style={{ marginRight: "40px" }}>
                  <Link to="/about"  >
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
