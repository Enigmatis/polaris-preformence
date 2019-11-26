import {CommonModel, Entity, Column, OneToMany} from "@enigmatis/polaris-typeorm";
import {Book} from "./book";

@Entity()
export class Author extends CommonModel{
    constructor(firstName: string, lastName: string, books?: Book[]) {
        super();
        firstName ? this.firstName = firstName : {};
        lastName ? this.lastName = lastName : {};
        books ? this.books = books : [];
    }

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Book, (book) => book.author)
    books: Book[]

}