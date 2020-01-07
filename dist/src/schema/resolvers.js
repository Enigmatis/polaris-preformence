"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_manager_1 = require("../dal/connection-manager'");
const polaris_core_1 = require("@enigmatis/polaris-core");
const book_1 = require("../dal/book");
const author_1 = require("../dal/author");
const logger_1 = require("../logger");
exports.resolvers = {
    Query: {
        allBooks: async (parent, args, context) => {
            logger_1.polarisGraphQLLogger.debug("I'm the resolver of all books");
            return await connection_manager_1.connection.getRepository(book_1.Book).find(new polaris_core_1.PolarisFindManyOptions({ relations: ['author'] }, context));
        },
        bookByTitle: (parent, args, context) => connection_manager_1.connection.getRepository(book_1.Book).find(new polaris_core_1.PolarisFindManyOptions({
            where: { title: polaris_core_1.Like(`%${args.title}%`) },
            relations: ['author']
        }, context)),
    },
    Author: {
        fullName(author) {
            return `${author.firstName} ${author.lastName}`;
        }
    },
    Mutation: {
        createBook: async (parent, args, context) => {
            const authorRepo = connection_manager_1.connection.getRepository(author_1.Author);
            const author = await authorRepo.findOne(new polaris_core_1.PolarisFindOneOptions({ where: { id: args.authorId } }, context));
            if (author) {
                const newBook = new book_1.Book(args.title, author);
                await connection_manager_1.connection.getRepository(book_1.Book).save(new polaris_core_1.PolarisSaveOptions(newBook, context));
                return newBook;
            }
            return undefined;
        },
        updateBook: async (parent, args, context) => {
            const bookRepo = connection_manager_1.connection.getRepository(book_1.Book);
            const result = await bookRepo.find(new polaris_core_1.PolarisFindManyOptions({ where: { title: polaris_core_1.Like(`%${args.title}%`) } }, context));
            let bookToUpdate = result.length > 0 ? result[0] : undefined;
            if (bookToUpdate) {
                bookToUpdate.title = args.newTitle;
                await bookRepo.save(new polaris_core_1.PolarisSaveOptions(bookToUpdate, context));
            }
            return bookToUpdate;
        }
    }
};
//# sourceMappingURL=resolvers.js.map