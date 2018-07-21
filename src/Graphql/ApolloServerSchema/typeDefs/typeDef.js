// Sample types and its query and mutation

import mutationType from "./mutation";
import queriesType from "./queries";
import typeNameType from "./typeName";

module.exports = [ mutationType,queriesType,typeNameType];


//  this is same as

/*
module.exports = `
type Query{
    getTypeName : [TYPE_NAME]!
}
type Mutation{
    mutateTypeNameID(_id : Int!) : TYPE_NAME
  }
  type TYPE_NAME{
    id : Int!
  }
`;

*/