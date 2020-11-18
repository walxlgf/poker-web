import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const CategoryPageTemplate = ({
  key,
  title,
  address
}) => {
  return (
    <div className="container is-max-widescreen">
      {key} - {title} - {address}
    </div>
  )
}

CategoryPageTemplate.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: mk } = data
  console.log('');
  return (
    <Layout>
      <CategoryPageTemplate
        key={mk.frontmatter.key}
        title={mk.frontmatter.title}
        address={mk.frontmatter.address}
      />
    </Layout>
  )
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        key
        title
        address
      }
    }
  }
`
