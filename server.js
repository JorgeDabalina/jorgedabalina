const express = require('express');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchRoutes } = require('react-router-config');
const { SitemapStream, streamToPromise } = require('sitemap');
const routes = require('./src/routes');

const app = express();

app.get('/sitemap.xml', (req, res) => {
  const sitemap = new SitemapStream({ hostname: 'https://www.jorgedabalina.com' });

  // Static example to test sitemap functionality
  sitemap.write({ url: '/example-path', changefreq: 'monthly', priority: 0.7 });

  sitemap.end();
  streamToPromise(sitemap).then((sm) => {
    res.header('Content-Type', 'application/xml');
    res.send(sm);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));