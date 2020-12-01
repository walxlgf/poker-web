import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import LatestSeriess from "../components/LatestSeriess"
import ThisYearSeriess from "../components/ThisYearSeriess"
import Gallery from "../components/Gallery"
import { throttle, rangesIntersect } from '../util/util'

export const IndexPageTemplate = ({ bannerImage, latestSeriess, thisYearSeriess, photos }) => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            {bannerImage ? (
                <div >
                    {bannerImage.childImageSharp && <Img style={{ height: '800px' }} fluid={bannerImage.childImageSharp.fluid} />}
                    {typeof bannerImage === 'string' && <img style={{ height: '800px' }} src={bannerImage} />}
                </div>
            ) : null}

            <BgAnimationViews />
            <LatestSeriess data={latestSeriess} />
            <ThisYearSeriess data={thisYearSeriess} />
            <Gallery photos={photos} />
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

// 首页背景动画色块
const BgAnimationViews = () => {
    const totalItemsCount = 7;

    // 所有  背景色块 距离浏览器顶部高度
    const [itemLocations, setItemLocations] = useState([])
    let refs = []
    for (let index = 0; index < totalItemsCount; index++) {
        const bgItemRef = useRef(null)
        refs.push(bgItemRef);
    }

    useEffect(() => {
        let navH = 175;  // 导航栏高度
        let topImageH = 800;  // 头部image高度
        for (let index = 0; index < refs.length; index++) {
            let ref = refs[index];
            let { offsetTop, offsetHeight } = ref.current;
            itemLocations.push({
                top: offsetTop + navH + topImageH,
                bottom: offsetTop + navH + topImageH + offsetHeight,
                isActive: false
            });
        }
    }, [])

    useEffect(() => {
        let throttleFn = throttle(() => {
            const { clientHeight, scrollTop } = document.documentElement;
            let flag = false;
            for (let index = 0; index < itemLocations.length; index++) {
                const location = itemLocations[index];
                if (!location.isActive
                    && rangesIntersect([scrollTop, scrollTop + clientHeight], [location.top, location.bottom])) {
                    flag = true;
                    location.isActive = true;
                }
            }
            if (flag) {
                setItemLocations([...itemLocations])
            }
        }, 100)
        window.addEventListener('scroll', throttleFn);
    }, [])

    return (
        <div className='bgView'>
            {
                refs.map((ref, index) => {
                    let classname = itemLocations[index] && itemLocations[index].isActive ? 'active' : '';
                    return (
                        <div key={index} ref={ref} className={`m-bg-item${index + 1} ${classname}`} >
                            <div />
                        </div>
                    )
                })
            }
        </div>
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