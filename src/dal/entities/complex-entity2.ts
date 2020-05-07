import {Column} from "@enigmatis/polaris-core";

export class ComplexEntity2 {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;
    @Column()
    public field4: string;
    @Column()
    public field5: string;
    @Column()
    public field6: string;

    public constructor(field1: string, field2: string, field3: string, field4: string, field5: string, field6: string) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
        this.field6 = field6;
    }
}
