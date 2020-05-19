import {Column, CommonModel, Entity, PrimaryGeneratedColumn} from "@enigmatis/polaris-core";
import {ComplexEntity1} from "./complex-entity1";
import {ComplexEntity2} from "./complex-entity2";
import {ComplexEntity3} from "./complex-entity3";
import {Generator} from "../../utils/generator";

@Entity({name: 'exampleentity'})
export class ExampleEntity extends CommonModel {
    @Column(() => ComplexEntity1)
    public complexEntity11: ComplexEntity1;
    @Column(() => ComplexEntity1)
    public complexEntity12: ComplexEntity1;
    @Column(() => ComplexEntity1)
    public complexEntity13: ComplexEntity1;
    @Column(() => ComplexEntity2)
    public complexEntity21: ComplexEntity2;
    @Column(() => ComplexEntity2)
    public complexEntity22: ComplexEntity2;
    @Column(() => ComplexEntity2)
    public complexEntity23: ComplexEntity2;
    @Column(() => ComplexEntity3)
    public complexEntity31: ComplexEntity3;
    @Column(() => ComplexEntity3)
    public complexEntity32: ComplexEntity3;
    @Column(() => ComplexEntity3)
    public complexEntity33: ComplexEntity3;
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
    @Column()
    public field10: string;
    @PrimaryGeneratedColumn("uuid")
    protected id!: string;

    public constructor() {
        super();
        this.field1 = Generator.GetRandomString();
        this.field2 = Generator.GetRandomString();
        this.field3 = Generator.GetRandomString();
        this.field4 = Generator.GetRandomString();
        this.field5 = Generator.GetRandomString();
        this.field6 = Generator.GetRandomString();
        this.field7 = Generator.GetRandomString();
        this.field8 = Generator.GetRandomString();
        this.field9 = Generator.GetRandomString();
        this.field10 = Generator.GetRandomString();
        this.complexEntity11 = new ComplexEntity1();
        this.complexEntity12 = new ComplexEntity1();
        this.complexEntity13 = new ComplexEntity1();
        this.complexEntity21 = new ComplexEntity2();
        this.complexEntity22 = new ComplexEntity2();
        this.complexEntity23 = new ComplexEntity2();
        this.complexEntity31 = new ComplexEntity3();
        this.complexEntity32 = new ComplexEntity3();
        this.complexEntity33 = new ComplexEntity3();
    }

    public getId(): string {
        return this.id;
    }
}
