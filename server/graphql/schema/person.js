

export const personSchema=`#graphql 


type person{
   id :Int!
   fullName:String !
   books:[book!]
   readingnumber:Int
   actualBooks:[book!]
   availableToRead:Boolean
   field:field
}

type Query{
   getPesrons:[person!]!
   getPersonById(id:Int!):person
}

type Mutation{
updatePerson(updatePerson:updatePerson):person!
}

input updatePerson{
    id :Int!
    fullName:String !
}

`