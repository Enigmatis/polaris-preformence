import {ConnectionOptions, createPolarisConnection, PolarisConnection} from "@enigmatis/polaris-core";
import {polarisGraphQLLogger} from "../utils/logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [__dirname + '/entities/*.ts'],
    synchronize: true,
    logging: true
};

export let connection: PolarisConnection;

export async function initConnection() {
    connection = await createPolarisConnection(connectionOptions, polarisGraphQLLogger);
}
