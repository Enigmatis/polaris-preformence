import {CommonModel, Column, Entity, ManyToOne, JoinColumn} from '@enigmatis/polaris-typeorm';
import {Author} from "./author";

@Entity()
export class Book extends CommonModel {

    constructor(title: string, author: Author) {
        super();
        title ? this.title = title : {};
        author ? this.author = author : {};
    }

    @Column()
    title: string;

    @ManyToOne(()=> Author, (author)=>author.books )
    author: Author;
}