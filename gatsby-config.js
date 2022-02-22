const { TAG_MGR_ID, SITEMAP_URL } = require("./env.js");

module.exports = {
  siteMetadata: {
    title: `Defense Unicorns`,
    image: `/img/SocialPreview.png`,
    description: `Become a DevSecOps Hero with Defense Unicorns`,
    siteUrl: SITEMAP_URL,
    keywords: `DevSecOps, DevOps, DefenseUnicorns, Kubernetes, Cloud Native`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-background-image",
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-root`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `blogImages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  image: node.frontmatter.image,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Defense Unicorns`,
        short_name: `DU`,
        start_url: `/*`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true,
        exclude: [`/404`, `/thankyou`, `/thankyoutraining`],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
          name: 'pages',
          engine: 'flexsearch',
          query: `
                query {
                  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    nodes {
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                      }
                    }
                  }
                }
              `,
          ref: 'slug',
          index: ['title', 'excerpt'],
          store: ['title', 'excerpt', 'date', 'slug'],
          normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
              title: node.frontmatter.title,
              excerpt: node.excerpt,
              date: node.frontmatter.date,
              slug: node.fields.slug,
          })),
      }
  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // Ensure that Tag manager stays before the gtag and ua analytics declarations in this file.
    // per https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: TAG_MGR_ID,
        includeInDevelopment: false,
      },
    },
  ],
};
