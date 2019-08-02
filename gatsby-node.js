const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const directorPageTemplate = path.resolve('./src/templates/directorPage.js')
    const res = await graphql(`
    query {
        allContentfulPerson {
            edges {
                node {
                   node_locale
                   slug
                }
            }
        }
    }
    `)
    res.data.allContentfulPerson.edges.forEach((edge) => {
        createPage({
            component: directorPageTemplate,
            path: `/directors/${edge.node.node_locale}/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                node_locale: edge.node.node_locale
            }
        })
    })
}