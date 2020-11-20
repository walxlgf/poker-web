import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/LatestSeriess"
import ThisYearSeriess from "../components/ThisYearSeriess"
import Gallery from "../components/Gallery"

export const IndexPageTemplate = ({ bannerImage, latestSeriess, thisYearSeriess }) => {
    return <div>
        <div style={{ backgroundColor: "#000000", width: "100%", height: "800px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {!!bannerImage && !!bannerImage.childImageSharp && <Img style={{ width: "1920px", height: "100%" }} fluid={bannerImage.childImageSharp.fluid} />}
            {!!bannerImage && typeof bannerImage === 'string' && <img style={{ width: "1920px", height: "100%" }} src={bannerImage} />}
        </div>
        <LatestSeriess data={latestSeriess} />
        <ThisYearSeriess data={thisYearSeriess} />
        <Gallery></Gallery>
    </div>
}


export default ({ data }) => {
    const { index, latestSeriess, thisYearSeriess } = data;
    return (
        <Layout>
            <IndexPageTemplate
                latestSeriess={latestSeriess.edges}
                thisYearSeriess={thisYearSeriess}
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