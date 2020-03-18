// var redis = require("redis");

// var client = redis.createClient('6379','127.0.0.1');
// var subscriber2 = redis.createClient('6379','127.0.0.1');

// // Second subscriber listens to events occuring for ALL keys
// function S2(next) {
//     subscriber2.on('pmessage', function(pattern,channel, msg) {
//         console.log( "S2: received on "+channel+" event "+msg )
//     });
//     subscriber2.psubscribe( "__keyspace@0__:*", function (err) {
//         next();
//     });
// }

// // Do something with keys mykey and anotherkey
// function do_something() {
//     client.set("mykey","example", function( err ) {
//         client.set("mykey", "another example", function( err ) {
//             client.del("mykey", function( err ) {
//                 client.set("anotherkey","example", function( err ) {
//                     client.del("anotherkey");
//                 });
//             });
//         });
//     });
// }

// // Here we go
//     S2( function () {
//         do_something();
//     });

var RedisClient = require("./RedisClient")

async function test(){
    var client = new RedisClient()
    await client.generateClient()

    // for(var i = 0; i < 100000; i++){
    //     await client.rPush('mylist', ['one','two','three','four'])
    // }    

    console.log(Date.now())
    var data = await client.lRange('mylist',0,-1)
    //console.log(data)
    console.log(Date.now())
}

test()