"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_manager_1 = require("./connection-manager'");
const book_1 = require("./book");
const author_1 = require("./author");
const logger_1 = require("../logger");
const polaris_typeorm_1 = require("@enigmatis/polaris-typeorm");
async function deleteTables() {
    const tables = ['book', 'author', 'dataVersion'];
    for (const table of tables) {
        if (connection_manager_1.connection) {
            try {
                await connection_manager_1.connection.getRepository(table).query('DELETE FROM "' + table + '";');
            }
            catch (e) {
                logger_1.polarisGraphQLLogger.debug("Couldn't delete table (might never existed)");
            }
        }
    }
}
function getAuthors() {
    return [
        new author_1.Author("J.K.", "Rowling", []),
        new author_1.Author("Michael", "Crichton", []),
    ];
}
function getBooks(authors) {
    return [
        new book_1.Book('Harry Potter and the Chamber of Secrets', authors[0]),
        new book_1.Book('Jurassic Park', authors[1]),
        new book_1.Book('Harry Potter and the Philosophers Stone', authors[0]),
        new book_1.Book('Harry Potter and the Goblet of Fire', authors[0]),
    ];
}
async function createExampleData(authors, books) {
    let authorRepo = connection_manager_1.connection.getRepository(author_1.Author);
    let bookRepo = connection_manager_1.connection.getRepository(book_1.Book);
    await authorRepo.save(new polaris_typeorm_1.PolarisSaveOptions(authors, {}));
    await bookRepo.save(new polaris_typeorm_1.PolarisSaveOptions([books[0], books[1], books[3]], {}));
    await bookRepo.save(new polaris_typeorm_1.PolarisSaveOptions(books[2], { requestHeaders: { 'realityId': 3 } }));
}
async function initializeDatabase() {
    await deleteTables();
    await connection_manager_1.connection.synchronize();
    const authors = getAuthors();
    const books = getBooks(authors);
    await createExampleData(authors, books);
}
exports.initializeDatabase = initializeDatabase;
//# sourceMappingURL=data-initalizer.js.map