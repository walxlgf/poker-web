import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Schedule from '../components/Series/Schedule'
import Result from '../components/Series/Result'
import Summary from '../components/Series/Summary'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import '../styles/offline-page.scss';



export default ({ pageContext: { categoryKey }, data }) => {

    const seriess = data.seriess && data.seriess.edges ? data.seriess.edges.map(edge => edge.node.frontmatter) : [];
    const categories = data.categories && data.categories.edges ? data.categories.edges.map(edge => edge.node.frontmatter) : [];
    const [category, setCategory] = useState(undefined);

    //如果category没有值，设置为categoryKey指定的那一个。
    useEffect(() => {
        if (!category && categories) {
            setCategory(categories ? categories.find(item => item.categoryKey === categoryKey) : undefined);
        }
    })

    let categorySeriess = [];
    if (category && seriess) {
        categorySeriess = seriess.filter(series => series.category === category.categoryKey);
    }

    const latestSeries = categorySeriess ? categorySeriess[0] : {};

    const [activeTabIndex, setActiveTabIndex] = useState(2)

    let tabIcons = [require('../img/eye.png'), require('../img/eye.png'), require('../img/eye.png'), require('../img/eye.png')]
    let tabNames = ['赛事简介', '赛程表', '赛事结果', '赛事直播',]

    const _renderContent = () => {
        if (activeTabIndex === 0) {
            return (
                <div className='s-summary-box' >

                </div>
            )
        }
        if (activeTabIndex === 1) return <Schedule />
        if (activeTabIndex === 2) return <Result />
        return (
            <div className='s-zhibo-box' >
                444
            </div>
        )
    }

    return (
        <Layout>
            <div className="s-container">

                <div className='s-image-content'>
                    <img src={'/img/mainbanner.jpg'} />
                </div>

                <div className='s-tabs'>
                    {
                        tabIcons.map((icon, i) => {
                            return (
                                <div key={i} onClick={() => setActiveTabIndex(i)}
                                    className={`s-tab-item ${activeTabIndex === i ? 'isActive' : ''}`}
                                >
                                    <img src={icon}></img>
                                    <p>{tabNames[i]}</p>
                                </div>
                            )
                        })
                    }
                </div>

                {_renderContent()}

            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
  query MyQuery {
    categories:allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "category-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            categoryKey
            title
            address
          }
        }
      }
    }
    seriess:allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {frontmatter: {templateKey: {eq: "series-page"}}}
      ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            events {
              no
              title
              buyin
              startChips
              startTime(formatString: "MMMM DD, YYYY")
              remark
              reEntry
              startBlind
              stopLevel
              duration
              survivor
              isMain
            }
            bannerImage {
              relativePath
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`



