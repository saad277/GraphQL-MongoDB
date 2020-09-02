const { gql } = require("apollo-server-express")

const { posts } = require("../temp")


const resolvers = {

    Query: {
        totalPosts: () => posts.length,
        allPosts: () => posts

    },
    Mutation: {
        newPost: (parent, args) => {
            console.log(args)
            const post = {
                id: posts.length + 1,
                description: args.input.description,
                title: args.input.title
            }

            posts.push(post)

            return post;
        }
    }


}

module.exports = resolvers