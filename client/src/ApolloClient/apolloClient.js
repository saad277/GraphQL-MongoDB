import { ApolloClient, InMemoryCache, createHttpLink, } from '@apollo/client';

const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphQl"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export default client