'use strict';

const mongo = require('mongodb');
const url = 'mongodb://localhost:27017/demo';

mongo.connect(url, { useNewUrlParser: true }, (error, db) => {
    if (error) {
        console.log('❌  An issue occured while connecting to the database!');
    } else {
        console.log('✅  Database successfully connected!');

        const storage = db.db('demo');
        const data = { name: 'Niels', passion: 'Sailing' };
        
        storage.collection('details').findOne(data, (err, collection) => {
            if (error) {
                console.log('❌  An issue occured while reading the record!');
            } else {
                console.log(`✅  1 record found!`);
                console.log(collection);
            }
        });

        db.close();
    }
});  