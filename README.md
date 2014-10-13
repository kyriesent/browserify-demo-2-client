browserify-demo-2-client
========================

Client for browserify-demo-2!

Instructions:

You'll need to have `node` and `browserify` installed **globally** on your machine to compile the project into a frontend script.

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
