import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const SeriesPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log('');
  return (
    <Layout>
      {edges && edges.map(edge => `__${edge.node.frontmatter.title}___  `)}
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
  query CategoryTemplate {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "category-page"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
