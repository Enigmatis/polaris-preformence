import {createPolarisConnection, ConnectionOptions, Connection} from "@enigmatis/polaris-typeorm";
import {polarisGraphQLLogger} from "../logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [
        __dirname + '/*.ts',
    ],
    synchronize: true,
    logging: true
};

export let connection: Connection;
export async function initConnection(){ connection = await createPolarisConnection(connectionOptions, polarisGraphQLLogger.getPolarisLogger());}

