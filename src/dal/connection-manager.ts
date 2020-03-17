import {ConnectionOptions, createPolarisConnection} from "@enigmatis/polaris-core";
import {polarisGraphQLLogger} from "../utils/logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [__dirname + '/entities/*.ts'],
    synchronize: true,
    logging: true
};

export async function initConnection() {
    await createPolarisConnection(connectionOptions, polarisGraphQLLogger);
}
