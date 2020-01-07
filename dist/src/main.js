"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polaris_core_1 = require("@enigmatis/polaris-core");
const type_defs_1 = require("./schema/type-defs");
const resolvers_1 = require("./schema/resolvers");
const polarisProperties = require("../polaris-properties.json");
const connection_manager_1 = require("./dal/connection-manager'");
const data_initalizer_1 = require("./dal/data-initalizer");
let server = new polaris_core_1.PolarisServer({ typeDefs: type_defs_1.typeDefs, resolvers: resolvers_1.resolvers, port: polarisProperties.port, connection: connection_manager_1.connection });
let startApp = async () => {
    await connection_manager_1.initConnection();
    await data_initalizer_1.initializeDatabase();
    await server.start();
};
try {
    startApp();
}
catch (e) {
    if (server)
        server.stop();
    console.log(e);
    process.exit(0);
}
//# sourceMappingURL=main.js.map