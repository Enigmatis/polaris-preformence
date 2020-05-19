import {ExampleEntity} from "./entities/example-entity";

export async function initializeExampleData(count: number): Promise<ExampleEntity[]> {
    let exampleEntities = [];
    for (let i = 0; i < count; i++) {
        exampleEntities.push(new ExampleEntity());
    }

    return exampleEntities;
}
