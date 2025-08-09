

export const bookSchema=`#graphql 


type book{
   id :Int!
   title:String!
   number:Int!
   field:field!
   content:String!
   persons:[person!]!
   available:Boolean!
}

type Query{
   getBooks:[book!]
   getBookById(id:Int!):book
}

type Mutation{
   addBook(addBook:addBook!):book!
   updateBook(updateBook:updateBook):book!
   removeBook(id:Int!):String!
}

input updateBook{
   id :Int!
   title:String !
   number:Int!
   content:String !
   field:Int!
}

input addBook{
   title:String!
   number:Int!
   field:Int
   content:String!
}


`