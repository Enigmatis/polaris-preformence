export const typeDefs = `
    type ComplexEntity1 {
      field1: String
      field2: String
      field3: String
      innerComplexEntity1: InnerComplexEntity
      innerComplexEntity2: InnerComplexEntity
    }
    
    type ComplexEntity2 {
      field1: String
      field2: String
      field3: String
      field4: String
      field5: String
      field6: String
    }
    
    type ComplexEntity3 {
      field1: String
      field2: String
      field3: String
      field4: String
      field5: String
      field6: String
      field7: String
      field8: String
      field9: String
    }
    
    type ExampleEntity implements RepositoryEntity {
      complexEntity11: ComplexEntity1
      complexEntity12: ComplexEntity1
      complexEntity13: ComplexEntity1
      complexEntity21: ComplexEntity2
      complexEntity22: ComplexEntity2
      complexEntity23: ComplexEntity2
      complexEntity31: ComplexEntity3
      complexEntity32: ComplexEntity3
      complexEntity33: ComplexEntity3
      deleted: Boolean
      field1: String
      field10: String
      field2: String
      field3: String
      field4: String
      field5: String
      field6: String
      field7: String
      field8: String
      field9: String
      id: String!
      createdBy: String!
      creationTime: DateTime!
      lastUpdatedBy: String
      lastUpdateTime: DateTime
      realityId: Int!
    }
    
    type InnerComplexEntity {
      field1: String
      field2: String
      field3: String
    }
    
    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
      endCursor: String
    }
    
    type Query {
      exampleEntities: [ExampleEntity]
    }
    
    type Mutation {
      addExampleEntities(count: Int!): Boolean
    }
`;
