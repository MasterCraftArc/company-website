module.exports = {
  siteMetadata: {
    siteUrl: "https://www.defenseunicorns.com",
    title: "Defense Unicorns",
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`, 
    'gatsby-plugin-postcss',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
  ]
};
