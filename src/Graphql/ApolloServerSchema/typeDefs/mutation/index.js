const mutation = `
type Mutation{
    mutateTypeNameID(_id : Int!) : TYPE_NAME
  }
`
module.exports = mutation;