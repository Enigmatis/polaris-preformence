import {connection} from "../dal/connection-manager'";
import { Like } from "@enigmatis/polaris-core"
import {Book} from "../dal/book";
import {Author} from "../dal/author";


export const resolvers = {
    Query: {
        allBooks: async () : Promise<Book[]> => {const result = await connection.getRepository(Book).find({relations:['author']});
        return result;},
        bookByTitle: (parent: any, args: any) : Promise<Book[]>  => {
            console.log(args);
            return connection.getRepository(Book).find({where: {title: Like(`%${args.title}%`)},relations:['author']});
        },
        deletedBooks: async (): Promise<Book[]> => {let result =  await connection.getRepository(Book).find({where:{deleted:true}});
        return result;}
    },
    Mutation: {
        createBook: async (parent: any, args: any): Promise<Book> => {
            const authorRepo = connection.getRepository(Author);
            const author =  await authorRepo.findOne({where: {id: args.authorId}});
            const newBook = new Book(args.title, author);
            await connection.getRepository(Book).save(newBook);
            return newBook;
        }
    }
};
