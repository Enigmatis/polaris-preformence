import {CommonModel, Column, Entity, ManyToOne} from '@enigmatis/polaris-typeorm';
import {Author} from "./author";

@Entity()
export class Book extends CommonModel {

    constructor(title: string, author: Author) {
        super();
        this.title = title;
        this.author = author;
    }

    @Column()
    title: string;

    @ManyToOne(() => Author, (author) => author.books)
    author: Author;
}