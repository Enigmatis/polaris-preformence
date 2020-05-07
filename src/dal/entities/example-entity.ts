import {Column, CommonModel, Entity, PrimaryGeneratedColumn} from "@enigmatis/polaris-core";
import {ComplexEntity1} from "./complex-entity1";
import {ComplexEntity2} from "./complex-entity2";
import {ComplexEntity3} from "./complex-entity3";

@Entity()
export class ExampleEntity extends CommonModel {
    @Column()
    public classification: string;
    @Column(type => ComplexEntity1)
    public complexEntity11: ComplexEntity1;
    @Column(type => ComplexEntity1)
    public complexEntity12: ComplexEntity1;
    @Column(type => ComplexEntity1)
    public complexEntity13: ComplexEntity1;
    @Column(type => ComplexEntity2)
    public complexEntity21: ComplexEntity2;
    @Column(type => ComplexEntity2)
    public complexEntity22: ComplexEntity2;
    @Column(type => ComplexEntity2)
    public complexEntity23: ComplexEntity2;
    @Column(type => ComplexEntity3)
    public complexEntity31: ComplexEntity3;
    @Column(type => ComplexEntity3)
    public complexEntity32: ComplexEntity3;
    @Column(type => ComplexEntity3)
    public complexEntity33: ComplexEntity3;
    @Column()
    public createdBy: string;
    @Column()
    public lastUpdatedBy: string;
    @Column()
    public realityId: number;
    @Column()
    public creationTime: Date;
    @Column()
    public lastUpdateTime: Date;
    @Column()
    public isDeleted: boolean;
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
    @Column()
    public secretGroups: string[];
    @PrimaryGeneratedColumn("uuid")
    protected id!: string;

    public constructor(classification: string, field1: string, field2: string, field3: string, field4: string, field5: string,
                       field6: string, field7: string, field8: string, field9: string, field10: string,
                       complexEntity11: ComplexEntity1, complexEntity12: ComplexEntity1, complexEntity13: ComplexEntity1,
                       complexEntity21: ComplexEntity2, complexEntity22: ComplexEntity2, complexEntity23: ComplexEntity2,
                       complexEntity31: ComplexEntity3, complexEntity32: ComplexEntity3, complexEntity33: ComplexEntity3,
                       realityId: number, createdBy: string, lastUpdatedBy: string, isDeleted: boolean, creationTime: Date,
                       lastUpdateTime: Date, secretGroups: string[]) {
        super();
        this.classification = classification;
        this.realityId = realityId;
        this.secretGroups = secretGroups;
        this.creationTime = creationTime;
        this.lastUpdateTime = lastUpdateTime;
        this.createdBy = createdBy;
        this.lastUpdatedBy = lastUpdatedBy;
        this.isDeleted = isDeleted;
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
        this.field6 = field6;
        this.field7 = field7;
        this.field8 = field8;
        this.field9 = field9;
        this.field10 = field10;
        this.complexEntity11 = complexEntity11;
        this.complexEntity12 = complexEntity13;
        this.complexEntity13 = complexEntity12;
        this.complexEntity21 = complexEntity21;
        this.complexEntity22 = complexEntity22;
        this.complexEntity23 = complexEntity23;
        this.complexEntity31 = complexEntity31;
        this.complexEntity32 = complexEntity32;
        this.complexEntity33 = complexEntity33;
    }

    public getId(): string {
        return this.id;
    }
}
