const { gql } = require("apollo-server-express")




const resolvers = {

    Query: {
        me: () => "saad",

    }


}

module.exports = resolvers;