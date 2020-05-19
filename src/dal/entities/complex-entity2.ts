import {Column} from "@enigmatis/polaris-core";
import {Generator} from "../../utils/generator";

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

    public constructor() {
        this.field1 = Generator.GetRandomString();
        this.field2 = Generator.GetRandomString();
        this.field3 = Generator.GetRandomString();
        this.field4 = Generator.GetRandomString();
        this.field5 = Generator.GetRandomString();
        this.field6 = Generator.GetRandomString();
    }
}
