"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polaris_core_1 = require("@enigmatis/polaris-core");
exports.loggerConfig = {
    loggerLevel: 'debug',
    writeToConsole: true,
    writeFullMessageToConsole: false
};
const applicationLogProperties = {
    id: 'example',
    name: 'example',
    component: 'repo',
    environment: 'dev',
    version: '1'
};
exports.polarisGraphQLLogger = new polaris_core_1.PolarisGraphQLLogger({
    loggerLevel: 'debug',
    writeToConsole: true,
    writeFullMessageToConsole: false
}, applicationLogProperties);
//# sourceMappingURL=logger.js.map