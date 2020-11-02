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

const Banner4Series = ({ slug }) => {
  const data = useStaticQuery(graphql`
  query SeriesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {templateKey: {eq: "series-details"}}}
    ) {
         {
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
  // const match = useMemo(() => (
  //   data.allMarkdownRemark.edges.find(({ node: { fields: { slug: seriesSlug } } }) => seriesSlug === slug)
  // ), [data, slug])



  //   {
  //   "data": {
  //     "allMarkdownRemark": {
  //       "edges": [
  //         {
  //           "node": {
  //             "id": "70819f71-b2bc-5f25-a398-86cd33446cd3",
  //             "fields": {
  //               "slug": "/series/2020-10-31-red-dragon-2020/"
  //             },
  //             "frontmatter": {
  //               "title": "RED DRAGON 2020"
  //             }
  //           }
  //         },
  //         {
  //           "node": {
  //             "id": "c3ac4b3f-375a-586c-a2ad-cdfced4e374b",
  //             "fields": {
  //               "slug": "/series/2020-11-01-appt-2020/"
  //             },
  //             "frontmatter": {
  //               "title": "APPT 2020"
  //             }
  //           }
  //         },
  //         {
  //           "node": {
  //             "id": "4b465004-2c1c-5c26-b68f-5b745af01b33",
  //             "fields": {
  //               "slug": "/series/2020-11-01-appt-manila-2020/"
  //             },
  //             "frontmatter": {
  //               "title": "APPT MANILA 2020"
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   },
  //   "extensions": {}
  // }

  console.log(`Banner4Series:edges:${JSON.stringify(data.allMarkdownRemark.edges)}`);
  const match = data.allMarkdownRemark.edges.find(item => item.node.fields.slug === slug);
  console.log(`Banner4Series:match:${JSON.stringify(match)}`);
  // const { title, description } = safeGet(match, 'node.frontmatter')
  const { title, description } = match ? match.node.frontmatter : {};
  return <div>{title} - {description}</div>
}

export default Banner4Series
