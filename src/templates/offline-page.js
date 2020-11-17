import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Schedule from '../components/Series/Schedule'
import Summary from '../components/Series/Summary'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
const OfflinePage = ({ pageContext: { categoryKey }, data }) => {

  console.log(`OfflinePage:categoryKey:${JSON.stringify(categoryKey)}`);
  const seriess = data.seriess && data.seriess.edges ? data.seriess.edges.map(edge => edge.node.frontmatter) : [];
  const categories = data.categories && data.categories.edges ? data.categories.edges.map(edge => edge.node.frontmatter) : [];
  const [category, setCategory] = useState(undefined);
  //如果category没有值，设置为categoryKey指定的那一个。
  useEffect(() => {
    if (!category && categories) {
      setCategory(categories ? categories.find(item => item.key === categoryKey) : undefined);
    }
  })

  // console.log(`OfflinePage:category:${JSON.stringify(category)}`);
  let categorySeriess = [];
  if (category && seriess) {
    categorySeriess = seriess.filter(series => series.category === category.key);
  }
  // console.log(`OfflinePage:categorySeriess:${JSON.stringify(categorySeriess)}`);

  const latestSeries = categorySeriess ? categorySeriess[0] : {};
  return (
    <Layout>
      <div className="container is-max-desktop">
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={<span><AppleOutlined />赛事简介</span>}
            key="1"
          >
            {latestSeries && category && <Summary
              latestSeries={latestSeries}
              category={category}
            />}
          </TabPane>
          <TabPane
            tab={<span><AndroidOutlined />赛程表</span>}
            key="2"
          >
            {latestSeries && category && categories && <Schedule
              seriess={seriess}
              categories={categories}
              category={category} />}
          </TabPane>
          <TabPane
            tab={<span><AppleOutlined />赛事结果</span>}
            key="3">
            Content of Tab Pane 3
        </TabPane>
        </Tabs>
      </div>
    </Layout>
  )
}

OfflinePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default OfflinePage

export const pageQuery = graphql`
  query MyQuery {
    categories:allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "category-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            key
            title
            address
          }
        }
      }
    }
    seriess:allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {frontmatter: {templateKey: {eq: "series-page"}}}
      ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            events {
              no
              title
              buyin
              startChips
              startTime(formatString: "MMMM DD, YYYY")
              remark
              reEntry
              startBlind
              stopLevel
              duration
              survivor
              isMain
            }
            bannerImage {
              relativePath
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`



