

export const readingSchema=`#graphql

type reading{
  book:book!
  person:person!
  Date:String!
  DeadLine:String!
  status:Boolean!
  isOutOfDate:Boolean
}

type Query{
  getReadings:[reading!]!
  getReadingByPerson:[reading]
  getReadingByBook:[reading]
}
  type Mutation{
    updateReadingStatus(id:Int!):reading!
}

`