import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const SeriesIndexTemplate = ({
  title,
  // seriesBanner,
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
      {/* <div>
        {seriesBanner.map((series) => (
          <article key={v4()} className="message">
            <div className="message-body">
              {series.author}
              <br />
              <cite> – {series.quote}</cite>
            </div>
          </article>
        ))}
      </div> */}
    </div>
  )

SeriesIndexTemplate.propTypes = {
  title: PropTypes.string,
  // seriesBanner: PropTypes.array,
}

const SeriesIndex = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SeriesIndexTemplate
        title={frontmatter.title}
        // seriesBanner={frontmatter.seriesBanner}
      />
    </Layout>
  )
}

SeriesIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SeriesIndex

export const seriesIndexQuery = graphql`
  query SeriesIndex($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
