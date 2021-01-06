import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/Index/LatestSeriess"
import ThisYearSeriess from "../components/Index/ThisYearSeriess"
import Photos from "../components/Index/Photos"
import BgAnimationViews from "../components/Index/BgAnimationViews"


export const IndexPageTemplate = ({ bannerImage, latestSeriess, series, photos }) => {
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
            <ThisYearSeriess data={series} />
            <Photos photos={photos} />
        </div>
    )
}

export default ({ data }) => {
    const { index, g_series } = data;
    const { photos, bannerImage } = index.frontmatter;
    let series = g_series.edges.map(edge => edge.node.frontmatter);
    let latestSeriess = series.slice(0, Math.min(series.length, 2));
    return (
        <Layout type='index'>
            <IndexPageTemplate
                latestSeriess={latestSeriess}
                series={series}
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
      }
    }
    g_series:allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {templateKey: {eq: "series-page"}}}
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            description
            category
            prize
            seriesImage
            currency
            events{
                startTime
            }
          }
        }
      }
    }
  }
`
