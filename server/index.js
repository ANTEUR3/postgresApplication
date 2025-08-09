console.log("hello server");
import pool from './postgres/index.js'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from './graphql/schema/index.js';
import  resolvers from './graphql/resolvers/index.js';
import dotenv from 'dotenv';
dotenv.config()

// const resolvers={}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 4000;
console.log(port);

const { url } = await startStandaloneServer(server, {
    listen:{port :port}
});