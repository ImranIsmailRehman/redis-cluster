const Redis = require('ioredis');

// Twemproxy (nutcracker) connection details
const TWEMPROXY_IP = 'localhost'; // Replace with your Twemproxy IP
const TWEMPROXY_PORT = 7111; // Replace with your Twemproxy port if different

const redis = new Redis({
    host: TWEMPROXY_IP,
    port: TWEMPROXY_PORT,
    enableReadyCheck: false
});

const testKey = 'testKey';
const testValue = 'Hello, Redis!';

const setAndGetKey = async () => {
    try {
        await redis.set(testKey, testValue);
        console.log(`Key set: ${testKey} = ${testValue}`);

        const value = await redis.get(testKey);
        console.log(`Retrieved key: ${testKey} = ${value}`);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        redis.disconnect();
    }
};

setAndGetKey();
