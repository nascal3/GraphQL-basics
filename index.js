import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Import DB
import db from './_db.js'

// Import types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        }
    }
}

// Server setUp
const server = new ApolloServer({
    // typeDefs (type definitions)
    typeDefs,
    //resolvers
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port:4000 }
})

console.log(`server ready at port: ${4000}`)
