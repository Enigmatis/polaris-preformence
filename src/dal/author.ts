import {CommonModel, Entity, Column, OneToMany} from "@enigmatis/polaris-typeorm";
import {Book} from "./book";

@Entity()
export class Author extends CommonModel{
    constructor(firstName: string, lastName: string, books: Book[]) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
    }

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Book, (book) => book.author)
    books: Book[]

}