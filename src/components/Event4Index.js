import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const events = [{
  key: "1",
  title: "NLH - Single Re-Entry",
  date: "19-25 Oct 2020",
  stats: "已经结束"
}, {
  key: "2",
  title: "NLH - Single Re-Entry",
  date: "19-25 Oct 2020",
  stats: "已经结束"
}, {
  key: "3",
  title: "NLH - Single Re-Entry",
  date: "19-25 Oct 2020",
  stats: "已经结束"
}, {
  key: "4",
  title: "NLH - Single Re-Entry",
  date: "19-25 Oct 2020",
  stats: "已经结束"
},]
export default function Banner({ slugs }) {


  return (
    <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <div className="container is-max-widescreen" style={{ padding: "2rem", width: "100vw", display: "flex", justifyContent: "center", border: "1px dotted green" }}>
        <div className="title" style={{ border: "1px dotted orange" }}>APPT MANILA 2020 赛事表</div>
      </div>
      <div className="container is-max-widescreen" style={{ width: "100vw", border: "1px dotted blue" }}>
        <div className="columns" style={{ margin: "1rem", border: "1px dotted green" }}>
          {events && events.map(event => (
            <div className="column is-3" key={event.key}>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", border: "1px dotted orange" }}>
                <div className="title">
                  {event.title}
                </div>
                <div className="subtitle">
                  {event.description}
                </div>
                <div className="subtitle">
                  {event.date}
                </div>
                <Link to="/about">
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