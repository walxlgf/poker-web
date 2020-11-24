import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const RulePageTemplate = ({ title, descriptions, details }) => {
    return (
        <div style={{ backgroundColor: 'black', padding: '100px 0' }}>
            <div style={{ margin: '0 auto', width: '1200px' }}>
                <h1 style={{ color: 'white', textAlign: 'center', fontSize: '40px', paddingBottom: '30px' }}>{title}</h1>
                {
                    descriptions.map((des, i) => {
                        return (
                            <p key={i} style={{ color: 'white', textAlign: 'center', width: '70%', fontSize: '25px', margin: '30px auto' }}>{des}</p>
                        )
                    })
                }
                <div style={{ backgroundColor: 'red', height: '1px', marginBottom: '40px', opacity: 0.5 }}></div>

                {
                    details.map((d, i) => {
                        return (
                            <p key={i} style={{ color: 'white', fontSize: '20px' }}>{`${i + 1}.  ${d}`}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ({ data }) => {
    const { title, descriptions, details } = data.markdownRemark.frontmatter
    return (
        <Layout>
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
