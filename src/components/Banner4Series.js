// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql, StaticQuery } from 'gatsby'

// class Banner extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: list } = data.allMarkdownRemark

//     return (
//       <div className="columns is-multiline">
//         {list && list.map(series => <div>
//           title:{series.node.frontmatter.title} date:{series.node.frontmatter.date} description:{series.node.frontmatter.description}
//         </div>)}
//       </div>
//     )
//   }
// }

// Banner.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }
// // query BlogPostByID($id: String!)
// // query SeriesQuery($slug: String! = "${slug}") {
// //   allMarkdownRemark(
// //     sort: { order: DESC, fields: [frontmatter___date] }
// //     filter: { frontmatter: { templateKey: { eq: $slug} }
// //   ) 
// export default ({ slug }) => (
//   <StaticQuery
//     query={graphql`
//       query SeriesQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] },
//           filter: {frontmatter: {templateKey: {eq: "series-details"}}}
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 20)
//               frontmatter {
//                 date(formatString: "MMMM DD, YYYY")
//                 title
//                 description
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <Banner data={data} count={count} />}
//   />
// )

import safeGet from 'lodash.get'
import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'

const Banner4Series = ({ slug }) => {
  const data = useStaticQuery(graphql`
  query SeriesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {templateKey: {eq: "series-details"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 20)
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
`)

  const match = useMemo(() => (
    data.allMarkdownRemark.edges.find(item => item.node.fields.slug === `/series/${slug}/`)
  ), [data, slug])
  // const match = data.allMarkdownRemark.edges.find(item => item.node.fields.slug === `/series/${slug}/`);
  // console.log(`Banner4Series:slug:${slug} match:${JSON.stringify(match)}`);
  const { title, date, description } = safeGet(match, 'node.frontmatter')
  // const { title,date, description } = match ? match.node.frontmatter : {};
  return <div>
    <Link className="btn" to={match.node.fields.slug}>
      {title}
    </Link>
    <div>{date} - {description}</div>
  </div>
}

export default Banner4Series