import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core"
import {ExampleEntity} from "../dal/entities/example-entity";
import {initializeExampleData} from "../dal/data-initalizer";

export const resolvers = {
    Query: {
        exampleEntities: async(
            parent: any,
            args: any,
            context: PolarisGraphQLContext
        ): Promise<ExampleEntity[]> => {
            const connection = getPolarisConnectionManager().get();
            return connection.getRepository(ExampleEntity).find(context, {take: 20});
        }
    },
    Mutation: {
        addExampleEntities: async (
            parent: any,
            args: { count: number },
            context: PolarisGraphQLContext
        ): Promise<boolean> => {
            try {
                const connection = getPolarisConnectionManager().get();
                const exampleEntityRepo = connection.getRepository(ExampleEntity);
                return initializeExampleData(args.count).then(res => {
                    const exampleEntities = res;
                    const exampleEntitiesBatches: Array<Array<ExampleEntity>> = [];
                    let chunk = 10;
                    for (let i = 0; i < exampleEntities.length; i += chunk) {
                        exampleEntitiesBatches.push(exampleEntities.slice(i, i + chunk));
                    }
                    exampleEntitiesBatches.forEach(batch => {
                        exampleEntityRepo.save(context, batch);
                    });
                    return new Promise((resolve) => {
                        resolve(true);
                    });
                });
            } catch (e) {
                return new Promise((resolve) => {
                    resolve(false);
                });
            }
        }
    }
};
