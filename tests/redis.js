var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

//client.set('test key 1', 'test value 1', redis.print)
// client.get('test key 1', function (error, result) {
//     if(error){
//         console.log(error)
//         throw error
//     }
//     console.log(`Get result -> ${result}`)
// })

//client.hset('HSET test 1', 'HSET test key 1', 'HSET test value 1', redis.print)

console.log(Date.now())
client.hgetall('HSET test 1', function(error, result){
    console.log(JSON.stringify(result))
    console.log(Date.now())
})