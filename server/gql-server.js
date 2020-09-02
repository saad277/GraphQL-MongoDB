
const { ApolloServer } = require("apollo-server");

require("dotenv").config()


// graphql server


//types query  /  mutation // subscription

const typeDefs = `

    type Query{
        totalPosts: Int!
    }

`


//resolvers

const resolvers = {

    Query: {
        totalPosts: () => 42
    }


}

const apolloServer=new ApolloServer({

    typeDefs,
    resolvers

})

apolloServer.listen(process.env.PORT,()=>{

    console.log("server running at Port"+process.env.PORT)
})