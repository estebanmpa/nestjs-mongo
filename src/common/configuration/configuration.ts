/**
 * This takes the environment configuration .env and makes it available to nestjs/config service
 */
export default () => ({
    listenPort: parseInt(process.env.LISTEN_PORT) || 3000,
    database: {
        batchSize: parseInt(process.env.MONGO_BATCH_SIZE),
        connectionString: process.env.MONGO_CONNECTION_STRING,
        //connectionString: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
    }
})