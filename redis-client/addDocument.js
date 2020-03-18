var redis = require('redis');



var client = redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.hset('HSET test 1', 'HSET test key 1', 'HSET test value 1', redis.print)