import {addBook,getBookById,getBooks,persons,field,available,updateBook,removeBook} from './book.js'
const resolvers={
    Query:{
     getBookById,
     getBooks

    },
    Mutation:{
        addBook,
        updateBook,
        removeBook
        
    },
    book:{
        persons,
        field,
        available
    }
}


export default resolvers