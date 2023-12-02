const newman = require('newman'); 

newman.run({
    collection: require('./heart_collection.json'),
    reporters: 'html',
    reporter: {
        html: {
            export: './htmlResults.html', 
        }
    }
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});