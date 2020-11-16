import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import { FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";
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
      <div style={{ border: "1px dotted green" }}>
        <div className="container is-max-desktop" style={{ border: "1px dotted red" }}>
          <nav className="level is-mobile" style={{ border: "1px dotted green", margin: "0px", height: "3rem" }}  >
            <div className="level-left" >
              <Link to="/" className="level-item" title="Home">
                <img src={logo} alt="Poker Web" style={{ width: '88px' }} />
              </Link>
            </div>
            <div className="level-right">
              <div className="level-item" style={{ border: "1px dotted grey" }}>
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
            </div>
          </nav>
        </div>
        <div className="full-width-navbar-container">
          <div className="container is-max-desktop" >
            <nav
              className="navbar is-primary"
              role="navigation"
              aria-label="dropdown navigation"
              style={{ marginTop: "0.0rem" }}
            >
              <div className="navbar-brand" style={{ marginLeft: "0.6rem" }}>
                <Link className="navbar-item" style={{ width: "3rem" }} to="/" title="Home">
                  <FaHome />
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
                    <div className="navbar-link is-arrowless" >线下赛事</div>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="navbar-item" to="/offline" state={{ categoryKey: "rd-jeju" }}>红龙杯济州站</Link>
                      <Link className="navbar-item" to="/offline" state={{ categoryKey: "rd-manila" }}>红龙杯马尼拉站</Link>
                      <Link className="navbar-item" to="/offline" state={{ categoryKey: "appt-jeju" }}>APPT济州站</Link>
                    </div>
                  </div>
                  <Link className="navbar-item" to="/products"></Link>
                  <Link className="navbar-item" to="/blog">
                    BLOG
              </Link>
                  <Link className="navbar-item" to="/about">
                    选手榜
              </Link>
                  <Link className="navbar-item" to="/about">
                    关于我们
              </Link>
                </div>
                <div className="navbar-end has-text-centered" style={{ paddingRight: "1rem" }}>
                  <Link className="navbar-item" to="/about"  >
                    PLAY ONLINE
              </Link>
                </div>
              </div>
            </nav >
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
