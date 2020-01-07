import {connection} from "./connection-manager'";
import {Book} from "./book";
import {Author} from "./author";
import {polarisGraphQLLogger} from "../logger";
import {PolarisSaveOptions} from "@enigmatis/polaris-typeorm";

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
    await authorRepo.save(new PolarisSaveOptions(authors, {} as any) as any);
    await bookRepo.save(new PolarisSaveOptions([books[0], books[1], books[3]],{} as any) as any);
    await bookRepo.save(new PolarisSaveOptions(books[2], {requestHeaders: {'realityId': 3}} as any) as any);
}

export async function initializeDatabase(){
    await deleteTables();
    await connection.synchronize();
    const authors: Author[] = getAuthors();
    const books: Book[] = getBooks(authors);
    await createExampleData(authors, books);
}
