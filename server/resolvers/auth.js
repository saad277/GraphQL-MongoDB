const { gql } = require("apollo-server-express")

const { authCheck } = require("../helpers/auth")


const me = async (parent, args, { req, res }) => {  //getting req and res from context



    await authCheck(req, res)

    return "saad"
}

const resolvers = {

    Query: {
        me

    }


}

module.exports = resolvers;