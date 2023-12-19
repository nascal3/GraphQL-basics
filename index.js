import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Import types
import { typeDefs } from "./schema.js";

// Server setUp
const server = new ApolloServer({
    // typeDefs (type definitions)
    typeDefs
    //resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: { port:4000 }
})

console.log(`server ready at port: ${4000}`)
