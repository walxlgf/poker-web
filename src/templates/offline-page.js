import React, { useState, useEffect, memo, useMemo } from 'react'
import Layout from '../components/Layout'
import Schedule from '../components/Series/Schedule'
import Result from '../components/Series/Result'
import Zhibo from '../components/Series/Zhibo'
import Summary from '../components/Series/Summary'
import '../styles/offline-page.scss';
import SeriesTabs from '../components/SeriesTabs'


export default ({ pageContext: { categoryKey }, data }) => {

    const series = data.seriess.edges.map(edge => edge.node.frontmatter);
    const categories = data.categories.edges.map(edge => edge.node.frontmatter).filter(c => c.categoryKey === categoryKey);

    console.log(categories);
    return (
        <Layout>
            <div className="s-container">
                <img className='topBanner' src={'/img/mainbanner.jpg'} />
                <SeriesTabs>
                    <Summary category={categories.length && categories[0]} />
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
      filter: { frontmatter: { templateKey: { eq: "category" } } }
    ) {
      edges {
        node {
          frontmatter {
            categoryKey
            title
            address
            date
            prize
            currency
            others
            descs{
                title
                texts
            }
          }
        }
      }
    }
    seriess:allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] },
        filter: {frontmatter: {templateKey: {eq: "series-page"}}}
      ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            currency
            events {
              no
              title
              startTime
              startingChips
              buyin
              bounty
              adminFee
              reEntry
              staffFee
              boundEventEntries
              boundEventPlayers
              boundEventPrizePools
              boundEventRemain
              rounds
              payouts{
                  rank
                  amount
                  nationality
                  name
                  avatar
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



