import {connection} from "./connection-manager";
import {Book} from "./entities/book";
import {Author} from "./entities/author";

async function deleteTables() {
    const tables = ['book', 'author', 'dataVersion'];
    for (const table of tables) {
        if (connection) {
            await connection.getRepository(table).query('DELETE FROM "' + table + '";');
        }
    }
}

function getAuthors(): Author[] {
    return [
        new Author("J.K.", "Rowling", []),
        new Author("Michael", "Crichton", []),
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
    await authorRepo.save({requestHeaders: {realityId: 0}} as any, authors);
    await bookRepo.save({requestHeaders: {realityId: 0}} as any, [books[0], books[1], books[3]]);
    await bookRepo.save({requestHeaders: {realityId: 3}} as any, books[2]);
}

export async function initializeDatabase() {
    await deleteTables();
    await connection.synchronize();
    const authors: Author[] = getAuthors();
    const books: Book[] = getBooks(authors);
    await createExampleData(authors, books);
}
