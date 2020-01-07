import {connection} from "../dal/connection-manager'";
import {
    Like,
    PolarisFindManyOptions,
    PolarisFindOneOptions,
    PolarisGraphQLContext,
    PolarisSaveOptions
} from "@enigmatis/polaris-core"
import {Book} from "../dal/book";
import {Author} from "../dal/author";
import {polarisGraphQLLogger} from "../logger";

export const resolvers = {
    Query: {
        allBooks: async (
            parent: any,
            args: any,
            context: PolarisGraphQLContext): Promise<Book[]> => {
            polarisGraphQLLogger.debug("I'm the resolver of all books");
            return await connection.getRepository(Book).find(new PolarisFindManyOptions({relations: ['author']}, context) as any);
        },
        bookByTitle: (parent: any, args: { title: string },
                      context: PolarisGraphQLContext): Promise<Book[]> =>
            connection.getRepository(Book).find(new PolarisFindManyOptions({
                where: {title: Like(`%${args.title}%`)},
                relations: ['author']
            }, context) as any),
    },
    Author: {
        fullName(author: Author) {
            return `${author.firstName} ${author.lastName}`;
        }
    },
    Mutation: {
        createBook: async (parent: any, args: { authorId: string, title: string }, context: PolarisGraphQLContext): Promise<Book | undefined> => {
            const authorRepo = connection.getRepository(Author);
            const author = await authorRepo.findOne(new PolarisFindOneOptions({where: {id: args.authorId}}, context) as any);
            if (author) {
                const newBook = new Book(args.title, author);
                await connection.getRepository(Book).save(new PolarisSaveOptions(newBook, context) as any);
                return newBook;
            }
            return undefined;
        },
        updateBook: async (parent: any, args: { title: string, newTitle: string }, context: PolarisGraphQLContext): Promise<Book | undefined> => {
            const bookRepo = connection.getRepository(Book);
            const result = await bookRepo.find(new PolarisFindManyOptions({where: {title: Like(`%${args.title}%`)}, relations: ['author']}, context) as any);
            let bookToUpdate = result.length > 0 ? result[0] : undefined;
            if (bookToUpdate) {
                bookToUpdate.title = args.newTitle;
                await bookRepo.save(new PolarisSaveOptions(bookToUpdate, context) as any);
            }
            return bookToUpdate;
        }
    }
};
