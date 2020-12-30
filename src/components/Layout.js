import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { withPrefix } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'


export default ({ children, type }) => {
    const data = useStaticQuery(graphql`
    query {allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "seo" } } })
     {
        edges {
          node {
            frontmatter {
              seos{
                 key
                 title
                 description
                 keywords
              } 
            }
          }
        }
      }
    }
    `)

    let seos = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)[0].seos;
    let seo = seos.find(seo => seo.key === type)
    if (!seo) seo = seos[0];
    const { title, description, keywords } = seo

    const _renderMetas = () => {
        return (
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />
                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
            </Helmet>
        )
    }
    return (
        <>
            {_renderMetas()}
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

