import { mutateTypeNameID } from "./mutations/typeNameMutation";
import { getTypeName } from "./queries/typeNameQueries";
const resolver = {
    Query: {
        getTypeName
    },
    Mutation: {
        mutateTypeNameID
    }
};
module.exports = resolver;
