import {PolarisServer} from '@enigmatis/polaris-core';
import {typeDefs} from './schema/type-defs';
import {resolvers} from './schema/resolvers';
import * as polarisProperties from '../polaris-properties.json';
import {connection, initConnection} from "./dal/connection-manager'";
import {initDb} from "./dal/Db";



let startApp = async ()=>{
    await initConnection();
    await initDb();
    const server = new PolarisServer({
        typeDefs,
        resolvers,
        port: polarisProperties.port,
        applicationLogProperties: {
            id: polarisProperties.id,
            name: polarisProperties.name,
            version: polarisProperties.version,
            environment: polarisProperties.environment,
            component: polarisProperties.component,
        },
        connection
    });
    await server.start();
}
try {
    startApp()
}
catch(e)
{
    // server.stop();
    console.log(e);
    process.exit(0)
}
