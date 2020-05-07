// import {getPolarisConnectionManager} from "@enigmatis/polaris-core";
//
// async function deleteTables() {
//     const connection = getPolarisConnectionManager().get();
//     const tables = ['book', 'author', 'dataVersion'];
//     for (const table of tables) {
//         if (connection) {
//             await connection.getRepository(table).query('DELETE FROM "' + table + '";');
//         }
//     }
// }
//
// export async function initializeDatabase() {
//     const connection = getPolarisConnectionManager().get();
//     await deleteTables();
//     await connection.synchronize();
// }
