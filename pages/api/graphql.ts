// @ts-ignore
const { ApolloServer, gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent: any, args: any, context: any) {
      return "Hello World!";
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.createHandler({
  path: "/api/graphql"
});

/* export const config = {
  api: {
    bodyParser: false
  }
}; */
