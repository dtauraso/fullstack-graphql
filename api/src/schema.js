const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
// not always 1 to 1 with schema
// propery can be computed but not stored into a database
// virtual
// these are types, not input types
/*input type, just like types */
const typeDefs = gql`
  
    type User {
        id: ID!
        username: String!
    }
    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String!
        buddies: [Pet]
    }
    input PetInput {
        name: String
        type: String
    }
    input NewPetInput {
        name: String!
        type: String!

    }
    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }

    type Mutation {
        newPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs
