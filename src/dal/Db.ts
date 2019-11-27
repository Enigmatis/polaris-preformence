import {connection} from "./connection-manager'";
import {Book} from "./book";
import {Author} from "./author";

export async function initDb(){
    const tables = ['book', 'author', 'dataVersion'];
    for (const table of tables) {
        if (connection) {
            try {
                await connection.getRepository(table).query('DELETE FROM "' + table + '";');
            }catch (e) {

            }
        }
    }
    await connection.synchronize();
    let authorRepo = connection.getRepository(Author);
    let author1 = new Author("J.K.", "Rowling");
    let author2 = new Author("Michael", "Crichton");
    await authorRepo.save([author1, author2]);
    let bookRepo = connection.getRepository(Book);
    let book1 = new Book('Harry Potter and the Chamber of Secrets', author1);
    let book2 = new Book('Jurassic Park', author2);
    await bookRepo.save([book1, book2]);
    let book3 = new Book('Harry Potter and the Stone of Smart', author1);
    connection.manager.queryRunner.data = {requestHeaders:{'realityId': 3}};
    book3.setRealityId(3)
    await bookRepo.save(book3);
    connection.manager.queryRunner.data.returnedExtensions = {};
    let book4 = new Book(book1.title, author1);
    book4.setRealityId(3)
    await bookRepo.save(book4);
    delete connection.manager.queryRunner.data.requestHeaders;
    delete connection.manager.queryRunner.data.returnedExtensions;
    let bookToBeDeleted = new Book("Im deleted", author2);
    bookToBeDeleted.setDeleted(true);
    await bookRepo.save(bookToBeDeleted);
}
