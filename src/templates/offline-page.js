import React, { useState, useEffect, memo, useMemo } from 'react'
import Layout from '../components/Layout'
import Schedule from '../components/Series/Schedule'
import Result from '../components/Series/Result'
import Zhibo from '../components/Series/Zhibo'
import Summary from '../components/Series/Summary'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import '../styles/offline-page.scss';
import SeriesTabs from '../components/SeriesTabs'


export default ({ pageContext: { categoryKey }, data }) => {

    const series = data.seriess.edges.map(edge => edge.node.frontmatter);

    return (
        <Layout>
            <div className="s-container">
                <div className='s-image-content'>
                    <img src={'/img/mainbanner.jpg'} />
                </div>
                <SeriesTabs
                    names={['赛事简介', '赛程表', '赛事结果', '赛事直播']}
                    icons={[require('../img/eye.png'), require('../img/eye.png'), require('../img/eye.png'), require('../img/eye.png')]}
                >
                    <div className='s-summary-box' />
                    <Schedule series={series} category={categoryKey} />
                    <Result series={series} />
                    <Zhibo />
                </SeriesTabs>
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
              startTime
              startingChips
              buyin
              bounty
              adminFee
              reEntry
              payouts{
                  rank
                  amount
                  nationality
                  name
              }
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



