import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import './index.less';
import './index-outter.less';
import logo from '../../img/logo.svg'

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
export default function Banner({ slugs }) {
  const data = useStaticQuery(graphql`
  query BannerSeriesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {templateKey: {eq: "series-page"}}}
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
              relativePath
              absolutePath
            }
          }
        }
      }
    }
  }
`)

  const list = useMemo(() => (
    data.allMarkdownRemark.edges.filter(item => slugs.findIndex(slug => `/series/${slug}/` === item.node.fields.slug) != -1)
  ), [data, slugs])

  return (

    <BannerAnim
      autoPlay
      autoPlaySpeed={5000}
      autoPlayEffect={false}
      style={{ border: "1px dotted red" }}
    >
      {list && list.map(edge => (
        <Element key={edge.node.fields.slug}
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${require(`../../../static/img/${edge.node.frontmatter.bannerImage.relativePath}`)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <QueueAnim name="QueueAnim" >
            <Link to={edge.node.fields.slug}>
              <div className="container is-max-desktop" style={{ marginTop: "5rem", border: "1px dotted blue" }}>
                <img src={logo} alt="Poker Web" style={{ width: '88px' }} />

                <h1 className="title">
                  {edge.node.frontmatter.title}
                </h1>
                <h2 className="subtitle">
                  {edge.node.frontmatter.description}
                </h2>
                <h2 className="subtitle">
                  {edge.node.frontmatter.date}
                </h2>
              </div>
            </Link>
          </QueueAnim>
        </Element>
      ))}
    </BannerAnim>);
}