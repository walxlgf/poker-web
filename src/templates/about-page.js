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

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px', marginBottom: '300px', position: 'relative' }}>

                    {_renderCircle()}
                    <div style={{ width: '8px', height: '150px', backgroundColor: 'white' }} />
                    {_renderCircle()}
                    <div style={{ width: '8px', height: '150px', backgroundColor: 'white' }} />
                    {_renderCircle()}

                    <div style={{ position: 'absolute', top: '45%', right: '57%' }}>
                        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', textAlign: 'right', marginBottom: '5px' }}>Nov 2018</p>
                        <p style={{ color: 'white', fontSize: '20px', textAlign: 'right', marginBottom: '5px' }}>红龙杯首次在济州举行，</p>
                        <p style={{ color: 'white', fontSize: '20px', textAlign: 'right' }}>打破韩国最高奖记录</p>
                        <img style={{ width: '300px', height: '180px' }} src={'/img/photo_wall_7.jpg'} />
                    </div>

                    <div style={{ position: 'absolute', top: '0', left: '57%' }}>
                        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', textAlign: 'left', marginBottom: '5px' }}>May 2020</p>
                        <p style={{ color: 'white', fontSize: '20px', textAlign: 'left' }}>红龙杯品牌升级，重新起航</p>
                        <img style={{ width: '300px', height: '180px' }} src={'/img/photo_wall_6.jpg'} />
                    </div>

                    <div style={{ position: 'absolute', bottom: '-30%', left: '57%' }}>
                        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', textAlign: 'left', marginBottom: '5px' }}>May 2009</p>
                        <p style={{ color: 'white', fontSize: '20px', textAlign: 'left' }}>首届红龙杯（原MPC），在澳门举行</p>
                        <img style={{ width: '300px', height: '180px' }} src={'/img/photo_wall_5.jpg'} />
                    </div>
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
