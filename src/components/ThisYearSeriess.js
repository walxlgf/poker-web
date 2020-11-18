import React from "react"
import { Link } from 'gatsby'

export default function Banner({ thisYearSeriess }) {


  return (
    <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
        <div className="title" style={{ border: "1px dotted orange" }}>2020 紅龍標賽事表</div>
      </div>
      <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
        <div className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
          {thisYearSeriess && thisYearSeriess.map(edge => (
            <div className="column is-3" key={edge.node.fields.slug}>
              <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}