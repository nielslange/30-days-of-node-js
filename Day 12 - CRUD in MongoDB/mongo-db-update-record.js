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
        const data = { $set : { name: 'Devin', passion: 'Cats' } };
        
        storage.collection('details').findOneAndUpdate(query, data, (err, collection) => {
            if (error) {
                console.log('❌  An issue occured while updating the record!');
            } else {
                console.log(`✅  1 record successfully updated!`);
                console.log(collection);
            }
        });

        db.close();
    }
});  