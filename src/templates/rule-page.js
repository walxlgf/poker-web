import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/other-pages.scss'

export const RulePageTemplate = ({ title, descriptions, details }) => {
    return (
        <div className='rulePage'>
            <div className='content'>
                <h1 >{title}</h1>
                {descriptions.map((des, i) => {
                    return <p key={i} className='param'>{des} </p>
                })}
                <div className='line'></div>
                {details.map((d, i) => {
                    return <p key={i} className='desc'>{`${i + 1}.  ${d}`}</p>
                })}
            </div>
        </div>
    )
}

export default ({ data }) => {
    const { title, descriptions, details } = data.markdownRemark.frontmatter
    return (
        <Layout type='rule'>
            <RulePageTemplate
                title={title}
                descriptions={descriptions}
                details={details}
            />
        </Layout>
    )
}

export const RulePageQuery = graphql`
  query RulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        descriptions
        details
      }
    }
  }
`
