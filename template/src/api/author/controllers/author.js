'use strict';

/**
 *  author controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::author.author', ({ strapi }) => ({
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { meta, data } = await super.find(ctx)

    data.forEach(({ attributes }) => {
      const { skills, social } = attributes
      // Flatten skills
      if (skills && Array.isArray(skills)) {
        attributes.skills_array = skills
          .map(({ value }) => value)
          .filter(Boolean)
      }
      // Flatten social
      if (social && Array.isArray(social)) {
        attributes.social_array = social
          .map(({ value }) => value)
          .filter(Boolean)
      }
    })
    return { data, meta }
  },
}))
