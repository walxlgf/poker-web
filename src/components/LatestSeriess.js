import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function LatestSeriess({ latestSeriess }) {
  return (
    <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <div style={{ backgroundColor: "#DA2A2C", height: "1px", width: "100vw" }}></div>
      <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
        <div className="title" style={{ border: "1px dotted orange" }}>最新赛事</div>
      </div>
      <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
        {latestSeriess && latestSeriess.map(edge => (
          <div key={edge.node.fields.slug} className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
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
                <button className="button is-primary is-inverted is-outlined">查看详情</button>
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