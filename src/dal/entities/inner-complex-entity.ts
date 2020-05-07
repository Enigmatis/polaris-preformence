import {Column, CommonModel, Entity, PrimaryGeneratedColumn} from "@enigmatis/polaris-core";

@Entity()
export class InnerComplexEntity extends CommonModel {
    @Column()
    public field1: string;
    @Column()
    public field2: string;
    @Column()
    public field3: string;
    @PrimaryGeneratedColumn("uuid")
    protected id!: string;

    public constructor(field1: string, field2: string, field3: string) {
        super();
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
    }

    public getId(): string {
        return this.id;
    }
}
