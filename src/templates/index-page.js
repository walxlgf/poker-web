import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/LatestSeriess"
import ThisYearSeriess from "../components/ThisYearSeriess"
import Gallery from "../components/Gallery"

export const IndexPageTemplate = ({ bannerImage, latestSeriess, thisYearSeriess, photos }) => {
    return (
        <div>
            {bannerImage ? (
                <div style={{ backgroundColor: 'black' }}>
                    {bannerImage.childImageSharp && <Img style={{ height: '800px' }} fluid={bannerImage.childImageSharp.fluid} />}
                    {typeof bannerImage === 'string' && <img style={{ height: '800px' }} src={bannerImage} />}
                </div>
            ) : null}
            <LatestSeriess data={latestSeriess} />
            <ThisYearSeriess data={thisYearSeriess} />
            <Gallery photos={photos}></Gallery>
        </div>
    )
}


export default ({ data }) => {
    const { index, latestSeriess, thisYearSeriess } = data;
    return (
        <Layout>
            <IndexPageTemplate
                latestSeriess={latestSeriess.edges}
                thisYearSeriess={thisYearSeriess}
                photos={thisYearSeriess.frontmatter.photos}
                bannerImage={index.frontmatter.bannerImage}
            />
        </Layout>
    )
}


export const seriesQuery = graphql`
  query IndexPageTemplate {
    index:markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
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
    latestSeriess:allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit:2,
      skip:0,
      filter: {frontmatter: {templateKey: {eq: "series-page"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 20)
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            address
            prize
            bannerImage {
                childImageSharp {
                  fluid(maxHeight: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
    thisYearSeriess:markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
       photos {
        width
        height
        name{
          relativePath
        }
      }
      thisYearSeries {
        title
        year
        events {
          address
          name
          subName
          attention
          state
          startTime
          endTime
        }
      }
    }
  }
  }
`