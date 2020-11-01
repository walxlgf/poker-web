import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IdxPageTemplate = ({
  title,
  seriesBanner,
}) => (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <div>
        {seriesBanner.map((series) => (
          <article key={series.author} className="message">
            <div className="message-body">
              {series.author}
              <br />
              <cite> – {series.quote}</cite>
              <cite> – {series.relatedSeries}</cite>
            </div>
          </article>
        ))}
      </div>
    </div>
  )

IdxPageTemplate.propTypes = {
  title: PropTypes.string,
  seriesBanner: PropTypes.array,
  relatedSeries: PropTypes.node,
}

const IdxPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IdxPageTemplate
        title={frontmatter.title}
        seriesBanner={frontmatter.seriesBanner}
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
        }
      }
    }
  }
`
