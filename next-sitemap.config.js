module.exports = {
    siteUrl: 'https://arpitsocials.in',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }
      ],
    },
  };