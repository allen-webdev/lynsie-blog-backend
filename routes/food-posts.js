var express = require('express');
var router = express.Router();
var getDb = require('../start/mongoUtil').getDb;
var mongodb = require('mongodb')

/* Get all food posts */
/* GET home page. */
router.get('/', function(req, res, next) {
    async function run() {
        const db = getDb();
        const cursor = db.collection('food-posts').find();
        const results = [];
        await cursor.forEach(doc => results.push(doc));
        res.send(results);
    }
    run();
  });

module.exports = router;