var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var config = require('../config.json');

var _db;

module.exports = {
    dbInit: callback => {
        if (_db) {
            console.warn('dbInit being called again');
            return;
        }
    
        MongoClient.connect(config.db['connection-string'], function ( err, client) {
            _db = client.db('blog-db');
            if(!err) console.log('Connected to db');
            return callback(err);
        });
    },
    getDb: () => {
        assert.ok(_db, 'DB not initialized');
        return _db;
    }
}