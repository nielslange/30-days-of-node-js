'use strict';

const mongo = require('mongodb');
const url = 'mongodb://localhost:27017/demo';

mongo.connect(url, { useNewUrlParser: true }, (error, db) => {
    if (error) {
        console.log('❌  An issue occured while connecting to the database!');
    } else {
        console.log('✅  Database successfully connected!');

        const storage = db.db('demo');
        const query = { name: 'Niels' };
        
        storage.collection('details').deleteMany(query, (err, collection) => {
            if (error) {
                console.log('❌  An issue occured while deleting the record(s)!');
            } else {
                console.log(`✅  ${collection.result.n} record(s) successfully deleted!`);
                console.log(collection.result);
            }
        });
        
        db.close();
    }
});  