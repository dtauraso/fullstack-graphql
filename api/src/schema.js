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
    # comment
    """
    shows up in tools
    """
    type User {
        id: ID!
        username: String!
        pets: [Pet]!
    }
    # can't query a shoe directly?
    # has to evaluate to a boot or sneaker

    # interface Shoe {
    #     brand: ShoeType!
    #     size: Int!
    # }
    # type Sneaker implements Shoe {
    #     brand: ShoeType!
    #     size: Int!
    #     sport: String!
    # }

    # type Boot implements Shoe {
    #     brand: ShoeType!
    #     size: Int!
    #     grip: Boolean!
    # }

    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String!
        buddies: [Pet]
        owner: User!

    }
    input PetInput {
        name: String
        type: String

    }
    input NewPetInput {
        id: ID
        name: String!
        type: String!

    }
    input UpdatePetInput {
        id: ID!
        name: String!
        type: String!

    }
    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet!
    }

    type Mutation {
        newPet(input: NewPetInput!): Pet
        updatePet(input: UpdatePetInput!): Pet
    }
`;

module.exports = typeDefs
