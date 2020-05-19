import {Column} from "@enigmatis/polaris-core";
import {Generator} from "../../utils/generator";

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

    public constructor() {
        this.field1 = Generator.GetRandomString();
        this.field2 = Generator.GetRandomString();
        this.field3 = Generator.GetRandomString();
        this.field4 = Generator.GetRandomString();
        this.field5 = Generator.GetRandomString();
        this.field6 = Generator.GetRandomString();
        this.field7 = Generator.GetRandomString();
        this.field8 = Generator.GetRandomString();
        this.field9 = Generator.GetRandomString();
    }
}
