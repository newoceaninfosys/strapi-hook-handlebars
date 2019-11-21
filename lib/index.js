const path = require('path');
const hbs = require('@nois/koa-hbs');
const co = require('co')

module.exports = strapi => {
  const hook = {
    defaults: {
      root: path.join(strapi.config.appPath, strapi.config.paths.views),
      viewExt: 'hbs',
      layout: path.join(strapi.config.appPath, strapi.config.paths.views, 'layout'),
      partialsDir: path.join(strapi.config.appPath, strapi.config.paths.views, 'partials'),
      layoutsDir: path.join(strapi.config.appPath, strapi.config.paths.views, 'layouts'),
      // defaultLayout: 'default',
      cache: true,
      debug: true,
      viewsPath: path.join(strapi.config.appPath, strapi.config.paths.views),
      // extname: 'hbs',
      // defaultLayout: 'default.hbs',
      // disableCache: false,
    },
    initialize: () => {
      const settings = Object.assign({}, strapi.hook.handlebars.defaults, strapi.config.hook.settings.handlebars)

      // Force cache mode in production
      if (strapi.config.environment === 'production') {
        strapi.config.hook.settings.handlebars.disableCache= false;
      }
      
      strapi.app.use(hbs.middleware(settings));
      strapi.app.context.render = co.wrap(strapi.app.context.render);
    }
  };
  return hook;
};