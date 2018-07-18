// Sample types and its query and mutation

const typeDefs = `
  type TYPE_NAME{
    id : Int!
  }
  type Query{
   getAllTypeName : [TYPE_NAME]!,
   getOneTypeName(_id : Int!) : TYPE_NAME!
  }

  type Mutation{
    mutateTypeName(_id :Int!) : TYPE_NAME
  }
`;

module.exports = typeDefs;
