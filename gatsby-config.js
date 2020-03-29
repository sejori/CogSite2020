const guid = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Cognitant',
    description: 'Health information, delivered better.',
    contact: {
      email: 'hello@cognitant.com',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        dropdown: true,
        dropdownLinks: [
            {
                name: "For patients and the public",
                link: "/#patients"
            },
            {
                name: "For healthcare professionals",
                link: "/#professionals"
            },
            {
                name: "For industry",
                link: "/#industry"
            },
        ]
      },
      // {
      //   name: 'Case Studies',
      //   link: '/case-studies',
      //   dropdown: false,
      // },
      {
        name: 'About',
        link: '/about',
        dropdown: true,
        dropdownLinks: [
            {
                name: "Our story",
                link: "/about#our-story"
            },
            {
                name: "Meet the team",
                link: "/about#team"
            },
            {
                name: "Work for us",
                link: "/about#careers"
            },
        ]
      },
      {
        name: 'News',
        link: '/news',
        dropdown: false,
      },
      {
        name: 'Contact',
        link: '/contact',
        dropdown: false,
      }
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-116709596-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
