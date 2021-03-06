const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return graphql(`
    {
      allMarkdownRemark(limit: 1000,filter: {frontmatter: {onlyData: {ne: true}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach((edge) => {
            console.log(`createPages:${JSON.stringify({ path: edge.node.fields.slug, tags: edge.node.frontmatter.tags, templateKey: edge.node.frontmatter.templateKey })}`)
            const id = edge.node.id
            const slug = edge.node.slug
            const templateKey = edge.node.frontmatter.templateKey
            let context = { id };

            //判断是不是index，如果是index,准备传参给Banner4Series
            if (templateKey === 'index-page')
                context.relatedSeries = edge.node.frontmatter.relatedSeries;

            createPage({
                path: edge.node.fields.slug,
                tags: edge.node.frontmatter.tags,
                component: path.resolve(
                    `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                ),
                // additional data can be passed via context
                context
            })
        })

        let categories = ['appt-jeju', 'rd-jeju', 'rd-manila']
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            createPage({
                path: `/offline/${category}`,
                component: path.resolve(`src/templates/offline-page.js`),
                context: { categoryKey: category }
            })
            console.log(`createPages:${JSON.stringify({ path: `/offline/${category}` })}`)
        }
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node) // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
