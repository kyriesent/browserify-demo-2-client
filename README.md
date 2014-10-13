browserify-demo-2-client
========================

Client for browserify-demo-2!

Instructions:

You'll need to have `node` and `browserify` installed **globally** on your machine to compile the project into a frontend script.

- There's a good tutorial for using `homebrew` to install node on Mac [here](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/).
- After installing node, you just need to run `npm install -g browserify` in your terminal to get browserify installed globally.


If you want to serve the test page, you'll also need `grunt-cli`

Once these are installed, clone this project.

```bash
git clone git@github.com:kyriesent/browserify-demo-2-client.git
```

Now go into your project directory and:

```bash
npm install # this installs all your dependencies

browserify demo.js > demobundle.js # This will build your bundle, which is already being loaded into index.html

grunt serve # this will start a server on your localhost which will serve index.html
```

Now visit [http://localhost:9999](http://localhost:9999) and play!

##Extra Credit

Get this bundle working in a framework that doesn't use node.js. PHP, python, ruby on rails, whatever you like.

Hint: The bundle is just javascript, so as long as you include `demobundle.js` into your HTML and you have a form on your page, it should work!

##Extra Extra Credit!

Include `index.js` into another javascript file that isn't `demo.js`, and then browserify that file and include it into your page to communicate with the server. This can highlight the modularity that you can achieve with browserify and common js!

[Browserify Documentation](https://github.com/substack/node-browserify)
[Other Good Resources on Browserify](http://browserify.org/articles.html)
