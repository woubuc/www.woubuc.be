---
title: How to use API keys in client-side Javascript
date: 2020-09-17
published: true

colour: cyan
subject: Javascript

tags:
- Javascript
- APIs
- Frontend
- Configuration Management
- Beginner
---

Managing API keys in front-end codebases can be a little tricky, especially for people who aren't very experienced with it. Here's an introduction to API keys and an overview of what to do and what not to do when it comes to key management in client-side Javascript.

<!--more-->

## Types of API keys
Generally speaking, there are two types of API keys: **secret** keys and **read-only** keys. Sometimes these are called private or public API keys, but it's best to use different terms to avoid confusion with SSH keys.

### Secret keys
These are your traditional API keys that have write access to the API resources. They can modify data, delete records, or even disable your entire account. If someone got a hold of these API keys, they could do a lot of damage. Depending on what functions the API allows, malicious use of your secret API key could cost you a lot of time and money.

**Never ever use secret keys in client-side code.**

No, I don't want to hear about your clever obfuscation that prevents people from lifting your key from your source code. Or any one of a dozen other ways you might have "hidden" your API key. If your client-side code makes an HTTP request with that key, it will show up in the network panel of the browser's developer tools for anyone to see.

Just don't put them in your code.

![Screenshot from the Ghost Admin API documentation, explain that the API key is secret and only suitable for secure server-side environments.](/images/posts/how-to-use-api-keys-in-client-side-javascript/secret-key-ghost.png)

_The docs for the [Ghost Admin API](https://ghost.org/docs/api/v3/admin/#authentication) explain that the API key is only suitable for server-side environments._

### Read-only keys
These API keys are specifically designed to be used in client-side code. They can only read data from the API, not write to it or change anything. So even if someone got a hold of a read-only API key, they couldn't do any damage to your data.

Whether an API can be used in client-side code is often noted explicitly in the documentation.

![Screenshot of the documentation for the updown.io API, explaining that the read-only API key can be used directly in Javascript without giving away read/write access.](/images/posts/how-to-use-api-keys-in-client-side-javascript/ro-key-updown.png)

_The docs for the [updown.io API](https://updown.io/api) explain how their read-only API key works._

## How to add API keys to your bundle
If you're using a bundler, adding API keys or other configuration is usually fairly easy. The standard way in Node.js is to use [the `dotenv` package](https://www.npmjs.com/package/dotenv) to load a `.env` file and access the environment variables through `process.env.*`. Most Javascript bundlers support this as well, either built-in or through plugins.

- Webpack: [`dotenv-webpack`](https://www.npmjs.com/package/dotenv-webpack), or simply the built-in [plugin](https://webpack.js.org/plugins/define-plugin/)
- Rollup: [`@rollup/plugin-replace`](https://www.npmjs.com/package/@rollup/plugin-replace) along with dotenv
- Parcel: [built-in](https://parceljs.org/env.html)

### What about unbundled javascript files?
If you're not using a bundler, embedding configuration values an be a little trickier. My preferred solution is to create a config.json file and fetch() the config data in my Javascript file.

###### config.json
```json
{
  "apiKey": "My read-only API key"
}
```

###### script.js
```javascript
fetch('/config.json').then(function (config) {
    console.log('API key:', config.apiKey);
});
```

Simply add the `config.json` to your `.gitignore` and treat it the same as you would a `.env` file.

Of course, the downside of this method is that you have to make an additional network request. You can mitigate the delay by adding a `<link rel="preload">` tag to your page, but it will still have some effect on how fast your Javascript will be ready to run.

Keeping that in mind, I highly recommend using a tool like [Parcel](https://parceljs.org/) to bundle your Javascript code. It will improve the load times of your web app and it will make your life easier.

However, if you're **not** working on a large online platform, if you're just writing some Javascript for your personal blog or website, then you have to ask yourself...

## Do I need to hide my API keys?
The popular [Twelve-Factor App principles](https://12factor.net/) state that configuration, such as credentials to external services (i.e. API keys), [should be stored in the environment](https://12factor.net/config). This means using something like `dotenv` to load and manage your config, rather than including it directly in your code and pushing it to your repository. And I completely agree with that.

Complex front-end applications need bundlers, API key management, minification and other optimisations, and many more things that make the website better and faster.

However, most of the sites on the internet are not large platforms. They're personal websites, blogs, online playgrounds for people just discovering the joys of web development. If you're working on a site like that, chances are most of the aspects of the Twelve-Factor App don't even apply to you. So why should the rule about configuration?

As long as you're using read-only API keys, there is no risk in simply pasting your API key into your Javascript code where you need it. It will be published on your website anyways, so people who really want your API key will find it even if you manage not to put it in your Github repository. So if they can't do anything wrong with the key itself, there's nothing to worry about.

So go ahead and build that awesome site using a simple `.html` file and some `.js` files in a folder. Just remember to use the correct, read-only API keys.
