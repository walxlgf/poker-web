import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Banner({ slugs }) {
  console.log(`Series4Index:slugs:${JSON.stringify(slugs)}`)
  const data = useStaticQuery(graphql`
    query TileSeriesQuery {
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
              bannerImage {
                  childImageSharp {
                    fluid(maxHeight: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
            }
          }
        }
      }
    }
  `)

  console.log(`Series4Index:${JSON.stringify(data)}`)
  const list = useMemo(() => (
    data.allMarkdownRemark.edges.filter(item => slugs.findIndex(slug => `/series/${slug}/` === item.node.fields.slug) != -1)
  ), [data, slugs])

  return (
    <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <div style={{ backgroundColor: "#DA2A2C", height: "1px", width: "100vw" }}></div>
      <div className="container is-max-desktop" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
        <div className="title" style={{ border: "1px dotted orange" }}>最新赛事</div>
      </div>
      <div className="container is-max-desktop" style={{ width: "100vw", border: "1px dotted blue" }}>
        {list && list.map(edge => (
          <div className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
            <div className="column is-4"
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", border: "1px dotted orange" }}>
              <div className="title">
                {edge.node.frontmatter.title}
              </div>
              <div className="subtitle">
                {edge.node.frontmatter.description}
              </div>
              <div className="subtitle">
                {edge.node.frontmatter.date}
              </div>
              <Link to={edge.node.fields.slug}>
                <button class="button is-primary is-inverted is-outlined">查看详情</button>
              </Link>
            </div>
            <div className="column is-8">
              <Img style={{ height: "15rem" }} fluid={edge.node.frontmatter.bannerImage.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}