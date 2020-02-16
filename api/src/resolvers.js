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
      console.log('Querty => pet')
      // returns a query of type pet
      return ctx.models.Pet.findOne(input)

    },
    
  },
  Mutation: {
    // some kind of creation query
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    },
    // updatePet(_, {input}, ctx) {
    //   const pet = ctx.models.Pet.update(input.id, input.updates)
    //   return pet
    // }

  },
  // this one gets run because the query for pet eutrns a type of pet

  // telling the owner how to resolve
  Pet: {
    owner(pet, __, ctx) {
      console.log('Pet => owner')
      return ctx.models.User.findOne()
    }
  },
  // this can be done in many ways
  // want to only resolve to a type
  User: {
  //     pets(user, _, ctx) {
    pets(_, __, ctx) {
      console.log("User => pets")

      return ctx.models.Pet.findMany()
    }
  }
  // Mutation: {
    
  // },
  // Pet: {
  //   // first argument to id is pet
  //   id(pet) {
  //     console.log(pet)
  //   }
  //   // img(pet) {
  //   //   return pet.type === 'DOG'
  //   //     ? 'https://placedog.net/300/300'
  //   //     : 'http://placekitten.com/300/300'
  //   // }
  // }
  // User: {
    
  // }
}
