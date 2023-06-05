//!Webpack
//!webpack is the go-to tool across the web for bundling and compiling JavaScript code(bundling your modules)
import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());