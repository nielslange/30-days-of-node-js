'use strict';

var express = require('express');
var app = express();
var mongo = require('mongodb');
var demo_db = 'mongodb://localhost:27017/demo_13';
var bodyParser = require('body-parser');
var crypto = require('crypto');

var getHash = ( pass , phone ) => {
    var hmac = crypto.createHmac('sha512', phone);
    var data = hmac.update(pass);
    var gen_hmac= data.digest('hex');
    console.log("hmac : " + gen_hmac);
    return gen_hmac;
}

app.get('/', (req,res) => {
	res.set({'Access-Control-Allow-Origin' : '*'});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log('ℹ️  Server listeing on port 3000.');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/sign_up', (req,res) => {
	const name = req.body.name;
	const mail = req.body.email;
	const pass = req.body.password;
    const phone = req.body.phone;
	const password = getHash(pass , phone); 				
	const data = {
		"name": name,
		"email": email,
		"password": password, 
		"phone" : phone
	}
	
	mongo.connect(demo_db , (error, db) => {
		if (error){
			throw error;
        }
        
		console.log('✅  Successfully connected to database!');
		db.collection("details").insertOne(data, (error , collection) => {
			if(error) {
                throw error;
            }
			console.log('✅  Records successfully created!');
			console.log(collection);
		});
	});
	
	console.log("DATA is " + JSON.stringify(data) );
	res.set({'Access-Control-Allow-Origin' : '*'});
	return res.redirect('/public/success.html'); 
});