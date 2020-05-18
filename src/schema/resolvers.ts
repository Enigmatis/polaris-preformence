import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core"
import {exampleentity} from "../dal/entities/exampleentity";

export const resolvers = {
    Query: {
        exampleEntities: async(
            parent: any,
            args: any,
            context: PolarisGraphQLContext
        ): Promise<exampleentity[]> => {
            const connection = getPolarisConnectionManager().get();
            const s = connection.getRepository(exampleentity).find(context);
            return s;
        }
    },
};
