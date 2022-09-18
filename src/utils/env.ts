const process = require('process');

export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST_API: process.env.HOST_API || 'https://ya-praktikum.tech/api/v2',
    HOST_RESOURCES: process.env.HOST_RESOURCES || 'https://ya-praktikum.tech/api/v2/resources',
    HOST_WS: process.env.HOST_WS || 'wss://ya-praktikum.tech/ws',
};
