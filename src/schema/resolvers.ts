import {connection} from "../dal/connection-manager'";
import {Like} from "@enigmatis/polaris-core"
import {Book} from "../dal/book";
import {Author} from "../dal/author";
import {polarisGraphQLLogger} from "../logger";

export const resolvers = {
    Query: {
            allBooks: async (): Promise<Book[]> => {
            polarisGraphQLLogger.debug("I'm the resolver of all books")
            return await connection.getRepository(Book).find({relations: ['author']});
        },
        bookByTitle: (parent: any, args: {title:string}): Promise<Book[]> =>
            connection.getRepository(Book).find({
                where: {title: Like(`%${args.title}%`)},
                relations: ['author']
        }),
    },
    Author: {
        fullName(author) {
            return `${author.firstName} ${author.lastName}`;
        }
    },
    Mutation: {
        createBook: async (parent: any, args: {authorId:string, title:string}): Promise<Book> => {
            const authorRepo = connection.getRepository(Author);
            const author = await authorRepo.findOne({where: {id: args.authorId}});
            const newBook = new Book(args.title, author);
            await connection.getRepository(Book).save(newBook);
            return newBook;
        },
        updateBook: async (parent: any, args: {title: string, newTitle: string}): Promise<Book> => {
            const bookRepo = connection.getRepository(Book);
            const result = await bookRepo.find({where:{title:Like(`%${args.title}%`)}});
            let bookToUpdate = result.length > 0 ? result[0] : undefined;
            if(bookToUpdate){
                bookToUpdate.title = args.newTitle;
                await bookRepo.save(bookToUpdate);
            }
            return bookToUpdate;
        }
    }
};
