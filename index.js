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
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
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
