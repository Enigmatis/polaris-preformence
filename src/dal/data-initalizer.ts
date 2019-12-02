import {connection} from "./connection-manager'";
import {Book} from "./book";
import {Author} from "./author";
import {polarisGraphQLLogger} from "../logger";

async function deleteTables() {
    const tables = ['book', 'author', 'dataVersion'];
    for (const table of tables) {
        if (connection) {
            try {
                await connection.getRepository(table).query('DELETE FROM "' + table + '";');
            } catch (e) {
                polarisGraphQLLogger.debug("Couldn't delete table (might never existed)");
            }
        }
    }
}

function getAuthors(): Author[] {
    return [
        new Author("J.K.", "Rowling"),
        new Author("Michael", "Crichton"),
    ];
}

function getBooks(authors: Author[]): Book[] {
    return [
        new Book('Harry Potter and the Chamber of Secrets', authors[0]),
        new Book('Jurassic Park', authors[1]),
        new Book('Harry Potter and the Philosophers Stone', authors[0]),
        new Book('Harry Potter and the Goblet of Fire', authors[0]),
    ]
}

async function createExampleData(authors: Author[], books: Book[]) {
    let authorRepo = connection.getRepository(Author);
    let bookRepo = connection.getRepository(Book);
    await authorRepo.save(authors);
    await bookRepo.save([books[0], books[1]]);
    connection.manager.queryRunner.data = {requestHeaders: {'realityId': 3}};
    // book3.setRealityId(3)
    await bookRepo.save(books[2]);
    connection.manager.queryRunner.data.returnedExtensions = {};
    await bookRepo.save(books[3]);
    delete connection.manager.queryRunner.data.requestHeaders;
    delete connection.manager.queryRunner.data.returnedExtensions;
}

export async function initializeDatabase(){
    await deleteTables();
    await connection.synchronize();
    const authors: Author[] = getAuthors();
    const books: Book[] = getBooks(authors);
    await createExampleData(authors, books);
}
