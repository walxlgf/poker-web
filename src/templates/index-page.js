import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner4Index from "../components/Banner4Index/index"
import Series4Index from "../components/Series4Index"
import Event4Index from "../components/Event4Index"
import Gallery from "../components/Gallery"
export const IndexPageTemplate = ({
  relatedSeries
}) => (
    <div>
      {/* <Banner4Index slugs={relatedSeries} />
      <Series4Index slugs={relatedSeries} /> */}
      <Event4Index />
      <Gallery></Gallery>
    </div>
  )

IndexPageTemplate.propTypes = {
  relatedSeries: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(`IndexPage:${JSON.stringify(frontmatter)}`)
  return (
    <Layout>
      <IndexPageTemplate
        relatedSeries={frontmatter.relatedSeries}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const seriesQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        relatedSeries
      }
    }
  }
`

