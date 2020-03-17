import {connection} from "../dal/connection-manager";
import {Like, PolarisError, PolarisGraphQLContext} from "@enigmatis/polaris-core"
import {Book} from "../dal/entities/book";
import {Author} from "../dal/entities/author";
import {polarisGraphQLLogger} from "../logger";

export const resolvers = {
    Query: {
        allBooks: async (
            parent: any,
            args: any,
            context: PolarisGraphQLContext
        ): Promise<Book[]> => {
            polarisGraphQLLogger.debug("I'm the resolver of all books", context);
            return await connection.getRepository(Book).find(context, {relations: ['author']});
        },
        bookByTitle: (
            parent: any,
            args: { title: string },
            context: PolarisGraphQLContext
        ): Promise<Book[]> => {
            return connection.getRepository(Book).find(context, {
                where: {title: Like(`%${args.title}%`)},
                relations: ['author'],
            });
        }
    },
    Mutation: {
        createBook: async (
            parent: any,
            args: { authorId: string, title: string },
            context: PolarisGraphQLContext
        ): Promise<Book> => {
            const authorRepo = connection.getRepository(Author);
            const bookRepo = connection.getRepository(Book);
            const author: Author | undefined = await authorRepo.findOne(context, {where: {id: args.authorId}});
            if (author) {
                const newBook = new Book(args.title, author);
                await bookRepo.save(context, newBook);
                return newBook;
            } else {
                throw new PolarisError("Could not find author with the requested id!", 400);
            }
        },
        updateBook: async (
            parent: any,
            args: { id: string, newTitle: string },
            context: PolarisGraphQLContext
        ): Promise<Book> => {
            const bookRepo = connection.getRepository(Book);
            const bookToUpdate: Book | undefined = await bookRepo.findOne(context, {where: {id: args.id}});
            if (bookToUpdate) {
                bookToUpdate.title = args.newTitle;
                await bookRepo.update(context, bookToUpdate.getId(), {title: args.newTitle});
                return bookToUpdate;
            } else {
                throw new PolarisError("Could not find book with the requested id!", 400);
            }
        }
    },
    Author: {
        fullName(author: Author) {
            return `${author.firstName} ${author.lastName}`;
        }
    }
};
