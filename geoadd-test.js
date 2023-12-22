const Redis = require('ioredis');

// HAProxy endpoint
const haproxyEndpoint = { host: 'localhost', port: 7111 };

const redis = new Redis(haproxyEndpoint);

const geoKey = 'locations';
const place = 'SomePlace';
const longitude = -0.1257; // Replace with your longitude
const latitude = 51.5085;  // Replace with your latitude

const testGeoAdd = async () => {
    try {
        // Adding geospatial information
        await redis.geoadd(geoKey, longitude, latitude, place);
        console.log(`Added location for ${place}`);

        // Retrieving geospatial information
        const position = await redis.geopos(geoKey, place);
        console.log(`Position for ${place}:`, position);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        redis.disconnect();
    }
};

testGeoAdd();
