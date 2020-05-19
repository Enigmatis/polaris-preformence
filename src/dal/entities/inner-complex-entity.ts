import {Column} from "@enigmatis/polaris-core";
import {Generator} from "../../utils/generator";

export class InnerComplexEntity {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;

    public constructor() {
        this.field1 = Generator.GetRandomString();
        this.field2 = Generator.GetRandomString();
        this.field3 = Generator.GetRandomString();
    }
}
