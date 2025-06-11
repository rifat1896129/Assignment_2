const newman = require('newman');
// require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/45547464-7a5dd662-5726-40b2-b74b-d62562a91687?access_key=PMAT-01JXEQ7W2A2VK6WV4KWQXF7SNX`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});