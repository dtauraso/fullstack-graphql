/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    // demo(_, __, {models, db}) {
    //   models.Pet.findMany({})
    // }
    pets(_, {input}/*myArgumentsFromTheSchema*/, ctx) {
      return ctx.models.Pet.findMany(input)
      // return [{id: 1, name: 'moose'}, {id: 2, name: 'garf'}]
    },
    pet(_, {input}, ctx) {
      return ctx.models.Pet.findOne(input)

    },
    
  },
  Mutation: {
    // some kind of creation query
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }

  },
  // Mutation: {
    
  // },
  Pet: {
    // first argument to id is pet
    id(pet) {
      console.log(pet)
    }
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
  }
  // User: {
    
  // }
}
