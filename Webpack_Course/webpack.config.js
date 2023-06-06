{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
   "watch": "webpack --watch",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^4.5.0",
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
//!In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code.
//!If an error originates from b.js, the source map will tell you exactly that.