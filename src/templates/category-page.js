import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const CategoryPageTemplate = ({
  categoryKey,
  title,
  address
}) => {
  return (
    <div className="container is-max-widescreen">
      {categoryKey} - {title} - {address}
    </div>
  )
}

CategoryPageTemplate.propTypes = {
  categoryKey: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: mk } = data
  return (
    <Layout>
      <CategoryPageTemplate
        categoryKey={mk.frontmatter.categoryKey}
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
        categoryKey
        title
        address
      }
    }
  }
`
