import {PolarisServer} from '@enigmatis/polaris-core';
import {typeDefs} from './schema/type-defs';
import {resolvers} from './schema/resolvers';
import * as polarisProperties from '../polaris-properties.json';
import {connection, initConnection} from "./dal/connection-manager'";
import {initializeDatabase} from "./dal/data-initalizer";

let server: PolarisServer;

let startApp = async () => {
    await initConnection();
    await initializeDatabase();
    server = new PolarisServer({typeDefs, resolvers, port: polarisProperties.port, connection});
    await server.start();
};

try {
    startApp()
} catch (e) {
    if(server) server.stop();
    console.log(e);
    process.exit(0)
}
