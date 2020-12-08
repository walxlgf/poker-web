import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const SeriesPageTemplate = ({
    title,
    description,
    bannerImage,
    events,
    helmet,
}) => {
    return (
        <div className="container is-max-widescreen">
            {title} - {description} - {!!bannerImage && typeof bannerImage === 'string' ? bannerImage : bannerImage.relativePath} - {`Events:${events && events.length}`}
        </div>
    )
}


export default ({ data }) => {
    const { markdownRemark: post } = data

    /**
     frontmatter:
bannerImage: {relativePath: "home-jumbotron.jpg", childImageSharp: {…}}
date: "December 09, 2020"
description: "RED DRAGON MANILA 2020"
events: Array(6)
0: {no: "1A", title: "RDM National Day 1A", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 01, 2019", …}
1: {no: "1B", title: "RDM National Day 1B", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 01, 2019", …}
2: {no: "1", title: "RDM National Day 2", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 02, 2019", …}
3: {no: "2A", title: "RDM National Day 1A", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 03, 2019", …}
4: {no: "2B", title: "RDM National Day 1B", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 04, 2019", …}
5: {no: "2", title: "RDM National Day 2", buyin: "₩ 1,350,000", startChips: "6000", startTime: "November 04, 2019", …}
length: 6
     * 
     */

    return (
        <Layout>
            <SeriesPageTemplate
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{post.frontmatter.title}</title>
                        <meta
                            name={post.frontmatter.title}
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title}
                bannerImage={post.frontmatter.bannerImage}
                events={post.frontmatter.events}
            />
        </Layout>
    )
}


export const pageQuery = graphql`
  query SeriesPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title 
        description
        events{
          no
          title
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
`
