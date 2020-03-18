var redis = require('redis');

module.exports = class RedisClient {

    constructor(client){
        this._client = client
        this.generateClient = this.generateClient.bind(this)
        this.hgetAll = this.hgetAll.bind(this)
    }

    generateClient() {
        return new Promise((resolve,reject) => {
            var client = redis.createClient()

            client.on('connect', () => {
                this._client = client
                resolve(client)
                console.log('Redis client connected')
            });
            
            client.on('error', (err) => {
                reject(`Something went wrong ${err}`)
            })
        })
    }

    hgetAll(hset){ 
        return new Promise((resolve,reject) => {
            this._client.hgetall(hset, function(error, result){
                if(error) reject(error)
                else resolve(JSON.stringify(result))
            })
        })          
    }

    rPush(key, valArr){
        return new Promise((resolve,reject) => {
            this._client.rpush(key, ...valArr, (error, result) => {
                if(error) reject(error)
                else resolve(result)
            })
        })
    }

    lRange(key, startRange, endRange){
        return new Promise((resolve,reject) => {
            this._client.lrange(key, startRange, endRange, (error, result) => {
                if(error) reject(error)
                else resolve(result)
            })
        })
    }

    subscribe(channel, message){
        this._client.on(message, function (channel, message) {
            console.log("Message: " + message + " on channel: " + channel + " is arrive!");
            //do something
        });
        this._client.psubscribe(channel);
    }

    unsubscribe(channel){
        this._client.unsubscribe(channel);
    }

    publish(channel, message){
        publisher.publish("notification", "{\"message\":\Hello world from Asgardian!\"}");
    }

}



