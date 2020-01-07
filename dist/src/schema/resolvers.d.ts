import { PolarisGraphQLContext } from "@enigmatis/polaris-core";
import { Book } from "../dal/book";
import { Author } from "../dal/author";
export declare const resolvers: {
    Query: {
        allBooks: (parent: any, args: any, context: PolarisGraphQLContext) => Promise<Book[]>;
        bookByTitle: (parent: any, args: {
            title: string;
        }, context: PolarisGraphQLContext) => Promise<Book[]>;
    };
    Author: {
        fullName(author: Author): string;
    };
    Mutation: {
        createBook: (parent: any, args: {
            authorId: string;
            title: string;
        }, context: PolarisGraphQLContext) => Promise<Book | undefined>;
        updateBook: (parent: any, args: {
            title: string;
            newTitle: string;
        }, context: PolarisGraphQLContext) => Promise<Book | undefined>;
    };
};
