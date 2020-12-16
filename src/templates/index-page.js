import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/Index/LatestSeriess"
import ThisYearSeriess from "../components/Index/ThisYearSeriess"
import Photos from "../components/Index/Photos"
import BgAnimationViews from "../components/Index/BgAnimationViews"


export const IndexPageTemplate = ({ bannerImage, latestSeriess, thisYearSeriess, photos }) => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            {bannerImage ? (
                <div >
                    {bannerImage.childImageSharp && <Img style={{ height: '650px' }} fluid={bannerImage.childImageSharp.fluid} />}
                    {typeof bannerImage === 'string' && <img style={{ height: '650px' }} src={bannerImage} />}
                </div>
            ) : null}

            <BgAnimationViews />
            <LatestSeriess data={latestSeriess} />
            <ThisYearSeriess data={thisYearSeriess} />
            <Photos photos={photos} />
        </div>
    )
}

export default ({ data }) => {
    const { index, latestSeriess } = data;
    const { thisYearSeriess, photos, bannerImage } = index.frontmatter;
    return (
        <Layout>
            <IndexPageTemplate
                latestSeriess={latestSeriess.edges}
                thisYearSeriess={thisYearSeriess}
                photos={photos}
                bannerImage={bannerImage}
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
        photos {
          width
          height
          name{
            relativePath
          }
        }
        thisYearSeriess {
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
            category
            prize
            seriesImage
            currency
          }
        }
      }
    }
  }
`