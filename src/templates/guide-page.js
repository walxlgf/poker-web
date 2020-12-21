
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/other-pages.scss'

export default ({ data }) => {
    const { title, guideSummarys, guideDetails } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className='guidePage'>
                <div className='guide-content'>
                    <h1>{title}</h1>
                    <div className='mediaRequestBox'>
                        <p className='title'>媒體証申請流程</p>
                        <div className='g-progress'>
                            <p style={{ width: '327px' }}>下載PokerStars LIVE扑克之星 現場賽事在線媒體証申請表格</p>
                            <i>1</i>
                            <p className='rightarrow'>-</p>
                            <i>2</i>
                            <p style={{ width: '375px' }}>提交在線媒體証申請表到以下郵箱 pokerstarsliveasia@ientcrop.com</p>
                        </div>
                        <div className='download'>下載在線媒體証申請表</div>
                    </div>
                    <div className='summarybox'>
                        {guideSummarys.map((t, i) => {
                            return <p key={i}>{i + 1}.&nbsp;&nbsp;&nbsp;{t}</p>
                        })}
                    </div>
                    <div>
                        {guideDetails.map((d, i) => {
                            return (
                                <div key={i} className='guideDetailBox'>
                                    <div className='seperatorline'></div>
                                    <p className='paragtitle'>{d.title}</p>
                                    {d.descs.map((t, j) => {
                                        return <p key={j} className='paragraph'>{t}</p>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const RulePageQuery = graphql`
  query GuidePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        guideSummarys
        guideDetails{
            title
            descs
        }
      }
    }
  }
`
