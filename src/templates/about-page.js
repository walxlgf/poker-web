import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const AboutPageTemplate = ({ descriptions }) => {

    return (
        <div className='aboutPage'>
            <img style={{ width: '100%', height: '400px' }} src={'/img/mainbanner.jpg'} />
            <div className='content'>
                <h1>关于我们</h1>
                <img className='desImage' src={'/img/photo_wall_8.jpg'} />
                <div className='descBox'>
                    {descriptions.map((des, i) => {
                        return <div className='descRow' key={i}>{des}</div>
                    })}
                </div>
                <div className='historyBox'>
                    <h3>紅龍歷史</h3>
                    <div className='progressLine' />
                    <div className='circleOuter'><div className='circleInner' /></div>
                    <div className='circleOuter'><div className='circleInner' /></div>
                    <div className='circleOuter'><div className='circleInner' /></div>
                    <div className='progressDes first'>
                        <h3 >May 2020</h3>
                        <p >紅龍杯品牌升級，重新起航</p>
                        <img src={'/img/photo_wall_6.jpg'} />
                    </div>
                    <div className='progressDes first2'>
                        <h3>Nov 2018</h3>
                        <div style={{ width: '70%', float: 'right' }}>
                            <p >紅龍杯首次在濟洲舉辦，打破韓國最高獎池記錄</p>
                        </div>
                        <img src={'/img/photo_wall_7.jpg'} />
                    </div>
                    <div className='progressDes first3'>
                        <h3 >May 2009</h3>
                        <p >首屆紅龍杯(原MPC)，在澳門舉行</p>
                        <img src={'/img/photo_wall_5.jpg'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ({ data }) => {
    const { title, descriptions, details } = data.markdownRemark.frontmatter
    return (
        <Layout type='about'>
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
        descriptions
      }
    }
  }
`
