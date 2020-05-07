import {Column, CommonModel, Entity, PrimaryGeneratedColumn} from "@enigmatis/polaris-core";
import {InnerComplexEntity} from "./inner-complex-entity";

@Entity()
export class ComplexEntity1 extends CommonModel {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;
    @Column()
    public innerComplexEntity1: InnerComplexEntity;
    @Column()
    public innerComplexEntity2: InnerComplexEntity;
    @PrimaryGeneratedColumn("uuid")
    protected id!: string;

    public constructor(field1: string, field2: string, field3: string, innerComplexEntity1: InnerComplexEntity,
                       innerComplexEntity2: InnerComplexEntity) {
        super();
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.innerComplexEntity1 = innerComplexEntity1;
        this.innerComplexEntity2 = innerComplexEntity2;
    }

    public getId(): string {
        return this.id;
    }
}
