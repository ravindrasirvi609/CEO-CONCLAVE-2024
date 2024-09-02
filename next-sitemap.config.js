module.exports = {
  siteUrl: 'https://ceo.opf.org.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ceo.opf.org.in/server-sitemap.xml',
    ],
  },
};