const newman = require("newman");

newman.run({
    collection: 'test.json', // path of the collection
    reporters: ['cli']
}, process.exit);