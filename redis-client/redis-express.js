const express = require('express')
const RedisClient = require('./RedisClient')

const app = express()
const port = 3001

app.get('/', async (req, res) => {
    var data = await redisHGetAll('HSET test 1')

    res.send(data)
})

async function redisHGetAll(setName){
    var client = new RedisClient()
    await client.generateClient()
    return await client.hgetAll(setName)
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} !`)
})