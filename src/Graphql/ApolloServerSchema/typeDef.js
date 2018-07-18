// Sample types and its query and mutation

const typeDefs = `
  type TYPE_NAME{

  }
  type Query{
   getTypeName : [TYPE_NAME]!
  }

  type Mutation{
    mutateTypeName(arg1 : String!,arg2:Number!) : TYPE_NAME
}
`;

module.exports = typeDefs;
