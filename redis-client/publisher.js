var redis = require("redis")

var publisher = redis.createClient()

publisher.set("mykey","example 1")

// publisher.config("SET", "notify-keyspace-events", "KEA")
// publisher.publish("pmessage", "{\"message\":\Hello world from Asgardian!\"}", function(){
//     process.exit(0);
// });