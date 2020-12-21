import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => {

    return <div></div>
}




export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
