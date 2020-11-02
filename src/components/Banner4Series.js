import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Banner extends React.Component {
  render() {
    const { data } = this.props
    const { edges: list } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {list && list.map(series => <div>
          title:{series.frontmatter.title} date:{series.frontmatter.date} description:{series.frontmatter.description}
        </div>)}
      </div>
    )
  }
}

Banner.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
// query BlogPostByID($id: String!)
// query SeriesQuery($slug: String! = "${slug}") {
//   allMarkdownRemark(
//     sort: { order: DESC, fields: [frontmatter___date] }
//     filter: { frontmatter: { templateKey: { eq: $slug} }
//   ) 
export default ({ slug }) => (
  <StaticQuery
    query={graphql`
      query SeriesQuery() {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {fields: {slug: {eq: "/series/2020-11-01-appt-2020/"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 20)
              id
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Banner data={data} count={count} />}
  />
)
