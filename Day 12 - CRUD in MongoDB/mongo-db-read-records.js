'use strict';

const mongo = require('mongodb');
const url = 'mongodb://localhost:27017/demo';

mongo.connect(url, { useNewUrlParser: true }, (error, db) => {
    if (error) {
        console.log('❌  An issue occured while connecting to the database!');
    } else {
        console.log('✅  Database successfully connected!');

        const storage = db.db('demo');
        
        storage.collection('details').find({}).toArray( (err, collection) => {
            if (error) {
                console.log('❌  An issue occured while reading the records!');
            } else {
                console.log(`✅  ${collection.length} records found!`);
                console.log(collection);
            }
        });

        db.close();
    }
});  