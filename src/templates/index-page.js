import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/LatestSeriess"
import ThisYearSeriess from "../components/ThisYearSeriess"
import Gallery from "../components/Gallery"

export const IndexPageTemplate = ({ bannerImage, latestSeriess, thisYearSeriess, photos }) => {


    // 所有  背景色块 距离浏览器顶部高度
    const [itemTops, setItemTops] = useState([])

    let refs = []
    for (let index = 0; index < 7; index++) {
        const bgItemRef = useRef(null)
        refs.push(bgItemRef);
    }

    useEffect(() => {
        let navH = 175;  // 导航栏高度
        let topImageH = 800;  // 头部image高度
        for (let index = 0; index < refs.length; index++) {
            let ref = refs[index];
            let itemTop = ref.current.offsetTop;
            itemTops.push({
                top: itemTop + navH + topImageH,
                isActive: false
            });
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            //可视区域高度  滚动条滚动高度
            const { clientHeight, scrollTop } = document.documentElement
            let flag = false;
            for (let index = 0; index < itemTops.length; index++) {
                const itemTop = itemTops[index];
                if (clientHeight + scrollTop < itemTop.top + 200) break;
                flag = true;
                itemTop.isActive = true;
            }
            if (flag) {
                setItemTops([...itemTops])
            }
        });
    }, [])


    return (
        <div style={{ backgroundColor: 'black' }}>
            {bannerImage ? (
                <div >
                    {bannerImage.childImageSharp && <Img style={{ height: '800px' }} fluid={bannerImage.childImageSharp.fluid} />}
                    {typeof bannerImage === 'string' && <img style={{ height: '800px' }} src={bannerImage} />}
                </div>
            ) : null}

            <div className='bgView'>
                {
                    refs.map((ref, index) => {
                        return (
                            <div ref={ref} className={`m-bg-item${index + 1} ${itemTops[index] && itemTops[index].isActive ? 'active' : ''}`} >
                                <div />
                            </div>
                        )
                    })
                }
            </div>

            <LatestSeriess data={latestSeriess} />
            <ThisYearSeriess data={thisYearSeriess} />
            <Gallery photos={photos}></Gallery>
        </div>
    )
}


export default ({ data }) => {
    const { index, latestSeriess, thisYearSeriess } = data;
    return (
        <Layout>
            <IndexPageTemplate
                latestSeriess={latestSeriess.edges}
                thisYearSeriess={thisYearSeriess}
                photos={thisYearSeriess.frontmatter.photos}
                bannerImage={index.frontmatter.bannerImage}
            />
        </Layout>
    )
}


export const seriesQuery = graphql`
  query IndexPageTemplate {
    index:markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        bannerImage {
          relativePath
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    latestSeriess:allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit:2,
      skip:0,
      filter: {frontmatter: {templateKey: {eq: "series-page"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 20)
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            address
            prize
            bannerImage {
                childImageSharp {
                  fluid(maxHeight: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
    thisYearSeriess:markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
       photos {
        width
        height
        name{
          relativePath
        }
      }
      thisYearSeries {
        title
        year
        events {
          address
          name
          subName
          attention
          state
          startTime
          endTime
        }
      }
    }
  }
  }
`