import {Column} from "@enigmatis/polaris-core";

export class ComplexEntity3 {
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
    @Column()
    public field7: string;
    @Column()
    public field8: string;
    @Column()
    public field9: string;

    public constructor(field1: string, field2: string, field3: string, field4: string, field5: string, field6: string,
                       field7: string, field8: string, field9: string) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
        this.field6 = field6;
        this.field7 = field7;
        this.field8 = field8;
        this.field9 = field9;
    }
}
