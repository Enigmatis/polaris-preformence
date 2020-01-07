import { CommonModel } from '@enigmatis/polaris-typeorm';
import { Author } from "./author";
export declare class Book extends CommonModel {
    constructor(title: string, author: Author);
    title: string | undefined;
    author: Author | undefined;
}
