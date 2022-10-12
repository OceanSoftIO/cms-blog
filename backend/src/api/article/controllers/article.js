'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { meta, data } = await super.find(ctx)

    data.forEach(({ attributes }) => {
      const { tags, keywords } = attributes
      // Flatten tags
      if (tags && Array.isArray(tags)) {
        attributes.tags_array = tags.map(({ value }) => value).filter(Boolean)
      }
      // Flatten keywords
      if (keywords && Array.isArray(keywords)) {
        attributes.keywords_array = keywords
          .map(({ value }) => value)
          .filter(Boolean)
      }
    })
    return { data, meta }
  },
}))
