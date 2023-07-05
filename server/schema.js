import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
  }

  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    phone: String!
    email: String!
    voteCount: Int!
    jobTitle: String!
    image: String!
    address: Address!
  }

  type Address {
    state: String!
    street: String!
    city: String!
    number: Int!
    zipCode: String!
    country: String!
  }
`;
