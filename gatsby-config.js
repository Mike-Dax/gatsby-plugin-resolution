module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-videos`,
            options: {
              pipelines: [
                {
                  name: "vp9",
                  transcode: chain =>
                    chain
                      .videoCodec("libvpx-vp9")
                      .noAudio()
                      .outputOptions(["-crf 20", "-b:v 0"]),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "webm",
                },
                {
                  name: "h264",
                  transcode: chain =>
                    chain
                      .videoCodec("libx264")
                      .noAudio()
                      .videoBitrate("1000k"),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "mp4",
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {},
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
