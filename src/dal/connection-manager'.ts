import {createPolarisConnection, ConnectionOptions, CommonModel, DataVersion, Connection} from "@enigmatis/polaris-typeorm";
import {polarisGraphQLLogger} from "../logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [
        __dirname + '/*.ts',
        CommonModel,
        DataVersion
    ],
    synchronize: false,
    logging: true
};


export let connection: Connection;

export async function initConnection(){ connection = await createPolarisConnection(connectionOptions, polarisGraphQLLogger.getPolarisLogger() as any);}

