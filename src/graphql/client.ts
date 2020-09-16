import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQL_HOST)
console.log('process.env.GRAPHQL_HOST: ', process.env.GRAPHQL_HOST)

export default client
