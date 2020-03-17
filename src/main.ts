import {PolarisServer} from '@enigmatis/polaris-core';
import {typeDefs} from './schema/type-defs';
import {resolvers} from './schema/resolvers';
import * as polarisProperties from '../resources/polaris-properties.json';
import {connection, initConnection} from "./dal/connection-manager";
import {initializeDatabase} from "./dal/data-initalizer";
import {realitiesHolder} from "./utils/realities-holder";

let server: PolarisServer = new PolarisServer({
    typeDefs,
    resolvers,
    port: polarisProperties.port,
    connection,
    supportedRealities: realitiesHolder,
});

let startApp = async () => {
    await initConnection();
    await initializeDatabase();
    await server.start();
};

startApp().catch(async e => {
    if (server) {
        await server.stop();
    }
    console.log(e);
    process.exit(0);
});
