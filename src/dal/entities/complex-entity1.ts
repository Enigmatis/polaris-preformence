import {Column} from "@enigmatis/polaris-core";
import {InnerComplexEntity} from "./inner-complex-entity";

export class ComplexEntity1 {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;
    @Column(type => InnerComplexEntity)
    public innerComplexEntity1: InnerComplexEntity;
    @Column(type => InnerComplexEntity)
    public innerComplexEntity2: InnerComplexEntity;

    public constructor(field1: string, field2: string, field3: string, innerComplexEntity1: InnerComplexEntity, innerComplexEntity2: InnerComplexEntity) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.innerComplexEntity1 = innerComplexEntity1;
        this.innerComplexEntity2 = innerComplexEntity2;
    }
}
