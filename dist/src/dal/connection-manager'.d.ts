import { Connection } from "@enigmatis/polaris-typeorm";
export declare let connection: Connection;
export declare function initConnection(): Promise<void>;
