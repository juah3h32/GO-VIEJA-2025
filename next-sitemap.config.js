module.exports = {
  siteUrl: 'https://grupo-ortiz.com',
  generateRobotsTxt: true,
  changefreq: 'daily',      // Frecuencia de cambio de tus páginas
  priority: 0.7,            // Prioridad por defecto para las URLs
  exclude: ['/admin', '/secret'], // Excluye ciertas rutas
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/special-page' },
    ],
  },
};
