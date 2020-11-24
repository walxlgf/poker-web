import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const AboutPageTemplate = ({ title, descriptions, details }) => {

    const _renderCircle = () => {
        return (
            <div style={{ padding: '10px', backgroundColor: 'blue', width: '100px', height: '100px', borderRadius: '50px' }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '40px', borderColor: 'red', borderWidth: '5px',
                    backgroundColor: 'blue', borderStyle: 'solid'
                }}>
                </div>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: 'black', paddingBottom: '100px' }}>

            <div style={{ width: '1920px', height: '800px', margin: '0 auto' }}>
                <img style={{ width: '100%', height: '100%' }} src={'/img/mainbanner.jpg'} />
            </div>

            <div style={{ margin: '0 auto', width: '1200px' }}>
                <h1 style={{ color: 'white', textAlign: 'center', fontSize: '40px', paddingBottom: '30px', paddingTop: '100px' }}>关于我们</h1>

                <img style={{ width: '420px', height: '280px', margin: '0 auto', display: 'block', marginBottom: '50px' }} src={'/img/photo_wall_8.jpg'} />

                {
                    descriptions.map((des, i) => {
                        return (
                            <p key={i} style={{ color: 'white', textAlign: 'center', width: '60%', fontSize: '25px', margin: '20px auto' }}>{des}</p>
                        )
                    })
                }


                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>

                    {_renderCircle()}
                    <div style={{ width: '8px', height: '150px', backgroundColor: 'white' }} />
                    {_renderCircle()}
                    <div style={{ width: '8px', height: '150px', backgroundColor: 'white' }} />
                    {_renderCircle()}
                </div>

            </div>
        </div>
    )
}

export default ({ data }) => {
    const { title, descriptions, details } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <AboutPageTemplate
                title={title}
                descriptions={descriptions}
                details={details}
            />
        </Layout>
    )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        descriptions
        details
      }
    }
  }
`
