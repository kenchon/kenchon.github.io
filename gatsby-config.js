require('dotenv').config();

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `観照日記  📖✍`,
    name: `Kenya Hondoh`,
    siteUrl: `https://kenchon.github.io`,
    description: `kenchon の徒然なるままに書き起こしたブログです。`,
    hero: {
      heading: `観照日記 📖✍️`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Earllibrary`,
      },
      {
        name: `github`,
        url: `https://github.com/kenchon`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/ken5526`,
      // },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kenya-hondoh-2a7067123/`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID || secrets.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || secrets.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://kenchon.github.io/`,
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: `UA-156100961-1`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kenchon's blog`,
        short_name: `kenchon`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
};
