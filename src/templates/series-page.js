import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Schedule from '../components/Series/Schedule'
import Summary from '../components/Series/Summary'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

export const SeriesPageTemplate = ({
  description,
  title,
  bannerImage,
  events,
  helmet,
}) => {
  return (
    <div className="container is-max-desktop">
      <Tabs defaultActiveKey="1" centered>
        <TabPane
          tab={<span><AppleOutlined />赛事简介</span>}
          key="1"
        >
          <Summary events={events}
            description={description}
            title={title}
            bannerImage={bannerImage} />
        </TabPane>
        <TabPane
          tab={<span><AndroidOutlined />赛程表</span>}
          key="2"
        >
          <Schedule events={events} />
        </TabPane>
        <TabPane
          tab={<span><AppleOutlined />赛事结果</span>}
          key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}

SeriesPageTemplate.propTypes = {
  helmet: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  events: PropTypes.array,
}

const SeriesPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('');
  return (
    <Layout>
      <SeriesPageTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.bannerImage}
        events={post.frontmatter.events}
      />
    </Layout>
  )
}

SeriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SeriesPage

export const pageQuery = graphql`
  query SeriesPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title 
        description
        events{
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
`