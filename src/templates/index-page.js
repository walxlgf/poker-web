import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner4Index from "../components/Banner4Index/index"
import Series4Index from "../components/Series4Index"
import Event4Index from "../components/Event4Index"
import Gallery from "../components/Gallery"
export const IdxPageTemplate = ({
  title,
  seriesBanner,
  relatedSeries
}) => (
    <div>
      <Banner4Index slugs={relatedSeries} />

      <Series4Index slugs={relatedSeries} />
      <Event4Index />
      <Gallery></Gallery>
      {/* <div>
        {seriesBanner.map((series) => (
          <article key={series.author} className="message">
            <div className="message-body">
              {series.author}
              <br />
              <cite> – {series.quote}</cite>
              <cite> – {series.relatedSeriesList}</cite>
            </div>
          </article>
        ))}
      </div> */}
    </div>
  )

IdxPageTemplate.propTypes = {
  title: PropTypes.string,
  seriesBanner: PropTypes.array,
  relatedSeries: PropTypes.array,
}

const IdxPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IdxPageTemplate
        title={frontmatter.title}
        seriesBanner={frontmatter.seriesBanner}
        relatedSeries={frontmatter.relatedSeries}
      />
    </Layout>
  )
}

IdxPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IdxPage

export const seriesQuery = graphql`
  query IdxPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "idx-page" } }) {
      frontmatter {
        title
        seriesBanner {
          author
          quote
          relatedSeriesList
        }
        relatedSeries
      }
    }
  }
`
