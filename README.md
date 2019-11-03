# Usage example of Ménneu API on ES modules.


[![Ménneu](https://shellyln.github.io/assets/image/ménneu-logo.svg)](https://github.com/shellyln/menneu/)


## Source files

* index.mjs
  * The entry point of this example.
* extension.js
  * Extend the node `require()` to load stylesheets as text.

## NPM Scripts

* start
  * Run without the bundlers; pure Node ES modules environment. (Node < `12.0.0`)
* start12
  * Run without the bundlers; pure Node ES modules environment. (Node = `12.0.0`)
    * Node's `.mjs` and `.js` lookup order behavior has changed, so it doesn't work on Node = `13.0.0`.  
      Prease use webpack (`npm run bundler:wp` and `npm run start:wp`).

---

* bundler:wp
  * Transpile and bundle with babel + webpack.
* start:wp
  * Run bundled file packed by webpack.

---

* bundler:pa
  * Transpile and bundle with parcel.
    * build error has occured. (index.mjs)
      * `Support for the experimental syntax 'importMeta' isn't currently enabled`
* start:pa
  * Run bundled file packed by parcel.
    * runtime error has occured. (extension.js)
      * `Cannot set property '.css' of undefined`
        * `require.extensions` is not existed.
