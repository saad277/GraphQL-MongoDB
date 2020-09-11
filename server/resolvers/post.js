const { gql } = require("apollo-server-express")

const { posts } = require("../temp")

const { authCheck } = require("../helpers/auth")

const User = require("../models/user")

const shortid = require("shortid")

const allPosts = async (parent, args, { req, res, next }) => {

    await authCheck(req, res, next)

    return posts

}

const userCreate = async (parent, args, { req, res, next }) => {

    const currentUser = await authCheck(req)

    const User = await User.findOne({ email: currentUser.email })

    return user ? user : new User({

        email: currentUser.email,
        username: shortid.generate()
    }).save();
}

const resolvers = {

    Query: {
        totalPosts: () => posts.length,
        allPosts

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
        },

        userCreate
    }


}

module.exports = resolvers