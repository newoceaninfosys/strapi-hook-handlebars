# strapi-hook-ejs

[![npm version](https://img.shields.io/npm/v/strapi-ejs.svg)](https://www.npmjs.org/package/strapi-hook-handlebars)
[![npm downloads](https://img.shields.io/npm/dm/strapi-ejs.svg)](https://www.npmjs.org/package/strapi-hook-handlebars)

This built-in hook allows you to use the Handlebars template engine with custom options.

## Configuration

To configure your hook with custom options, you need to edit your `./config/hook.json` file in your Strapi app.

```javascript
{
  ...
  "handlebars": {
    "enabled": true
  }
}
```

More information in the Koa ejs module https://github.com/newoceaninfosys/koa-hbs#options

## Usage

Insert code in your controller to render a view.

```javascript
module.exports = {
  home: async ctx => {
    return await ctx.render('home', {
      title: 'My app title',
    });
  },
};
```

This will render the `views/home.hbs` file and you will have access to `<%= title %>` data in your ejs file.

## Resources

- [MIT License](LICENSE.md)