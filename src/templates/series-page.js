import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const SeriesPageTemplate = ({
  description,
  title,
  bannerImage,
  events,
  helmet,
}) => {
  return (
    <div className="container is-max-widescreen">

    </div>
  )
}

SeriesPageTemplate.propTypes = {
  helmet: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  events: PropTypes.array,
}

const SeriesPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('');
  return (
    <Layout>
      <SeriesPageTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="fdfffdf"
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

SeriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}




export default SeriesPage

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
`
