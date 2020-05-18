import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core"
import {exampleentity} from "../dal/entities/exampleentity";

export const resolvers = {
    Query: {
        exampleEntities: async(
            parent: any,
            args: any,
            context: PolarisGraphQLContext
        ): Promise<any[]> => {
            const connection = getPolarisConnectionManager().get();
            const s = await connection.getRepository(exampleentity).find(context, {take: 20});
            return s;
            // return [{field1:"hi"}];
        }
    },
};
