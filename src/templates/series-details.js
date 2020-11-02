import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export const SeriesDetailsTemplate = ({
  description,
  title,
  bannerImage,
  helmet,
}) => {
  console.log(`SeriesDetailsTemplate:bannerImage:${JSON.stringify(bannerImage)}`)
  console.log(`SeriesDetailsTemplate:typeof bannerImage:${typeof bannerImage}`)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
          </div>
          <Img fluid={bannerImage.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

SeriesDetailsTemplate.propTypes = {
  helmet: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const SeriesDetails = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('');
  return (
    <Layout>
      <SeriesDetailsTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.bannerImage}
      />
    </Layout>
  )
}

SeriesDetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SeriesDetails

export const pageQuery = graphql`
  query SeriesDetailsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title 
        description
        bannerImage {
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
