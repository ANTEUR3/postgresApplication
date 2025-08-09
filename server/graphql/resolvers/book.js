import pool from "../../postgres/index.js";

export const getBooks = async () => {
  try {
    const books = await pool.query("select * from  book ");
    return books.rows;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (_, args) => {
  try {
    const id = args.id;
    const book = await pool.query(`select * from  book where id=${id} `);
    return book.rows[0];
  } catch (error) {}
};

export const addBook = async (_, args) => {
  try {
    const newBook = args.addBook;
    const book = await pool.query(
      "INSERT INTO book (title, content, number, field) VALUES ($1, $2, $3, $4)",
      [newBook.title, newBook.content, newBook.number, newBook?.field]
    );
    return newBook;
  } catch (error) {
    console.log(error);
  }
};

export const   updateBook = async (_,args) => {
    const { id,title, content, number, field } = args.updateBook;
    
    const query = `
        UPDATE book 
        SET title = $1, content = $2, number = $3, field = $4
        WHERE id = $5
        RETURNING *;
    `;
    
    const updateBook_= await pool.query(query, [title, content, number, field, id]);
    return updateBook_.rows[0]
    
};

export const   removeBook = async (_,args) => {
    const  id = args.id;
    
    const query = `
        DELETE  from  book where id=${id}
    `;
    
    const updateBook_= await pool.query(query);
    return "Book delete succssefully"
    
};

export const persons = async (parent) => {
  try {
    console.log(parent.id);

    const persons = await pool.query(
      `select  person.* from reading inner join person on reading.person = person.id where reading.book=${parent.id} `
    );
    //   console.log(persons);
    return persons.rows;
  } catch (error) {}
};


export const field = async (parent) => {
  try {

    const field = await pool.query(
      `select  field.* from book inner join field on book.field = field.id `
    );
    //   console.log(persons);
    
    return field.rows[0];
  } catch (error) {}
};

export const available = async (parent) => {
  try {

    const readingNumber = await pool.query(
      `SELECT COUNT(*) FROM reading WHERE book =${parent.id} AND complete='f'`
    );

    console.log(readingNumber,"readingNumber");
    return readingNumber.rows[0].count<parent.number;
  } catch (error) {
   console.log(error);
  }
};


