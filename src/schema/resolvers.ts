import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core"
import {ExampleEntity} from "../dal/entities/example-entity";

export const resolvers = {
    Query: {
        exampleEntities: async(
            parent: any,
            args: any,
            context: PolarisGraphQLContext
        ): Promise<ExampleEntity[]> => {
            const connection = getPolarisConnectionManager().get();
            return connection.getRepository(ExampleEntity).find(context);
        }
    },
};
