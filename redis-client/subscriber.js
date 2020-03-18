var redis = require("redis")

var subscriber = redis.createClient()

subscriber.config("SET", "notify-keyspace-events", "KEA")
subscriber.on("pmessage", function (pattern, channel, message) {
    console.log("("+  pattern +")" + " client received message on " + channel + ": " + message);
});
subscriber.psubscribe('__key*__:*')

subscriber.rpush()

var x = {
    "stem": ["docId1", "docId2"] 
}

// const RedisClient = require('./RedisClient')

// async function test(){
//     var client = new RedisClient()
//     await client.generateClient()
//     client.subscribe('__key*__:*')
// }

// test()