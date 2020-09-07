module.exports = {
  siteMetadata: {
    title: 'Chris R. Short',
    description: 'Passionate and detail-oriented software developer with a systematic approach to problem-solving and ability to work in a team environment, I am seeking to advance my career as a software developer where I can contribute my experience, education, and leadership.',
    author: '@devcshort',
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-70974763-3',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Inconsolata:300,600,900'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chris R. Short',
        short_name: 'Chris R. Short',
        start_url: '/',
        background_color: '#00aced',
        theme_color: '#00aced',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
