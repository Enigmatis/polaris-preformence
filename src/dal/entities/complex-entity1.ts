import {Column} from "@enigmatis/polaris-core";
import {InnerComplexEntity} from "./inner-complex-entity";
import {Generator} from "../../utils/generator";

export class ComplexEntity1 {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;
    @Column(() => InnerComplexEntity)
    public innerComplexEntity1: InnerComplexEntity;
    @Column(() => InnerComplexEntity)
    public innerComplexEntity2: InnerComplexEntity;

    public constructor() {
        this.field1 = Generator.GetRandomString();
        this.field2 = Generator.GetRandomString();
        this.field3 = Generator.GetRandomString();
        this.innerComplexEntity1 = new InnerComplexEntity();
        this.innerComplexEntity2 = new InnerComplexEntity();
    }
}
