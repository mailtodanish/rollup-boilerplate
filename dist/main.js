'use strict';

// import foo from './foo'
module.exports = function() {
    // dynamic loading
    Promise.resolve().then(function () { return require('./foo-775115a3.js'); }).then(({ default: foo }) => {
        console.error(foo);
    });

};
