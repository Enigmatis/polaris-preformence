import {ConnectionOptions, createPolarisConnection} from "@enigmatis/polaris-core";
import {polarisGraphQLLogger} from "../utils/logger";
import {DbTablesNamingStrategy} from "../utils/db-tables-naming-strategy";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [__dirname + '/entities/*.{ts,js}'],
    logging: true,
    schema: 'mgf-performance',
    namingStrategy: new DbTablesNamingStrategy()
};

export async function initConnection() {
    await createPolarisConnection(connectionOptions, polarisGraphQLLogger);
}
