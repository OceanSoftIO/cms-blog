# Strapi Template >> Blog

⚡ Strapi is an open-source Node.js Headless CMS with a fully customizable API that lets you develop practical, production-ready Node.js APIs in hours instead of weeks.

🎯 Strapi V4 Headless-CMS Template for creating Blog CMS Backend, such as Education, Agency, Beauty, Medical, News, Personal, and Science.

## Usage

### Step 1: Install Strapi Backend

```
yarn create strapi-app backend --template @oceansoft/strapi-template-blog
```

* ✅ When the installation is complete, Strapi's administration panel will open in your browser, and you can register a user and get started creating content.

### Step 2: Installing Gatsby plugins & Enter Access Credentials

* ✅ After installing Strapi, you need to install the Gatsby plugin.

  ```
  cd ../frontend
  # yarn add gatsby-source-strapi
  ```

> Auto-generated Access Credentials

* ✅ If you are working on local development, create a .env file and paste your Strapi credentials in it. 
* ☑️ To deploy your application in production, you need to add the environment variables to your deployment platform provider.

  ```
  echo "Move backend/frontend.env.development to frontend/.env"
  mv ../backend/frontend.env.development .env
  # cat frontend/.env
  ```

  > `frontend/.env`

  ```
  STRAPI_API_URL=Your_Strapi_Server_URL
  STRAPI_TOKEN=Your_Strapi_API_Token
  ```

### Step 3: Register Strapi CMS plugin

> `frontend/gatsby-config.js`

```javascript
require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article', 'category', 'author'],
        queryLimit: 1000
      }
    },
    {
      /** ATTENTION: Match the theme name with the theme you're using */
      resolve: '@oceansoft/gatsby-blog-education',
      options: {
        sources: {
          strapi: true,
          local: false
        }
      }
    }
  ]
}
```

### Step 4. 

* Every time you modify `gatsby-config.js` file, you need to clean the cache:

  `yarn clean`

* That’s it! You can now start gatsby dev server to see your content from Strapi.

  `yarn develop`

### Step 5 (Optional): Automate Re-building

If you’re planning to deploy your site to AWS, Netlify or Vercel, you can automate deployments by configuring webhooks to trigger a site rebuild when content is modified in your Strapi panel.

* [Webhooks explained and how to use them in Strapi](https://strapi.io/blog/webhooks)
* [Triggering a deploy in Netlify automatically after updating content in Strapi](https://chriswray.dev/posts/triggering-a-deploy-in-netlify-automatically-after-updating-content-in-strapi)