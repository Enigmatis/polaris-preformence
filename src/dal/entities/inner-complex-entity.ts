import {Column} from "@enigmatis/polaris-core";

export class InnerComplexEntity {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;

    public constructor(field1: string, field2: string, field3: string) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
    }
}
