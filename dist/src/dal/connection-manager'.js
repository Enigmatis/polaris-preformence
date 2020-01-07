"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polaris_typeorm_1 = require("@enigmatis/polaris-typeorm");
const logger_1 = require("../logger");
let connectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [
        __dirname + '/*.ts',
        polaris_typeorm_1.CommonModel,
        polaris_typeorm_1.DataVersion
    ],
    synchronize: false,
    logging: true
};
async function initConnection() { exports.connection = await polaris_typeorm_1.createPolarisConnection(connectionOptions, logger_1.polarisGraphQLLogger.getPolarisLogger()); }
exports.initConnection = initConnection;
//# sourceMappingURL=connection-manager'.js.map