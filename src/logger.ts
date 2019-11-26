import {PolarisGraphQLLogger} from "@enigmatis/polaris-graphql-logger";

const applicationLogProperties = {
    id: 'example',
    name: 'example',
    component: 'repo',
    environment: 'dev',
    version: '1'
};

export const polarisGraphQLLogger = new PolarisGraphQLLogger(applicationLogProperties, {
    loggerLevel: 'debug',
    writeToConsole: true,
    writeFullMessageToConsole: false
});