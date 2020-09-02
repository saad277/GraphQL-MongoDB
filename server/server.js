const express = require("express")
const { ApolloServer, } = require("apollo-server-express");
require("dotenv").config()
const http = require("http")
const path = require("path")
const mongoose = require("mongoose")
const app = express();
const { fileLoader, mergeTypes, mergeResolvers } = require("merge-graphql-schemas")


const db = async () => {

    try {

        const success = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })

        console.log("Connected TO MONGO DB")

    } catch (error) {

        console.log("Connection failed TO MONGO DB ", error)
    }

}

db();

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typeDefs")))

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, "./resolvers")));



const apolloServer = new ApolloServer({

    typeDefs,
    resolvers

})

//applyMiddleWare to connect appolo to express

apolloServer.applyMiddleware({
    app: app
})

const httpServer = http.createServer(app)

app.get("/rest", (req, res) => {

    res.json({
        data: "You have hit rest endpoint"
    })

})

app.listen(process.env.PORT, () => {

    console.log("server running at Port" + process.env.PORT)
    console.log("Graph QL server running at Port" + apolloServer.graphqlPath)
})