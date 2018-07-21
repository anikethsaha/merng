// sample mutation example

module.exports = {
    mutateTypeNameID : (root, args) => {
        // do something
        // add to db or any operation
        // return the `typeName` type
        return args._id;
    }
}