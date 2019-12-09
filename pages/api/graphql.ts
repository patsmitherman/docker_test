// @ts-ignore
const { ApolloServer, gql } = require("apollo-server-micro");

const data = [
  {
    id: "1",
    firstName: "Joe",
    lastName: "Blow",
    address: {
      address: "123 Some St",
      city: "Big City",
      state: "CA",
      zip: "12345"
    }
  },
  {
    id: "2",
    firstName: "Eddie",
    lastName: "Van Halen",
    address: {
      address: "234 Other Rd",
      city: "Dallas",
      state: "TX",
      zip: "34523"
    }
  },
  {
    id: "3",
    firstName: "Mark",
    lastName: "Johnson",
    address: {
      address: "8 Same Blvd",
      city: "Pensacola",
      state: "FL",
      zip: "64534"
    }
  },
  {
    id: "4",
    firstName: "Boris",
    lastName: "Smith",
    address: {
      address: "42 Broadway",
      city: "Silverhill",
      state: "AL",
      zip: "62525"
    }
  }
];

const typeDefs = gql`
  type Query {
    sayHello: String
    users: [User]
    user(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    address: Address
  }

  type Address {
    address: String
    city: String
    state: String
    zip: String
  }
`;

const resolvers = {
  Query: {
    // @ts-ignore
    sayHello(parent, args, context) {
      return "Hello World!";
    },
    // @ts-ignore
    users(parent, args, context) {
      return data;
    },
    // @ts-ignore
    user(parent, { id }, context) {
      return data.find(u => {
        return u.id === id;
      });
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
