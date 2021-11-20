import * as redis from 'redis';

async function main() {
    const client = redis.createClient({
        url: 'redis://localhost:6379',
    })

    try {
        await client.connect();
        await client.set('key', 'Hello.');
        const value = await client.get('key');
        console.log(value);
        process.exit();
    } catch(error) {
        console.error(error);
    }
}

main();
