import {personSchema} from './person.js'
import {bookSchema} from './book.js'
import {readingSchema} from './reading.js'
import { fieldScema } from './field.js';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typeDefs= mergeTypeDefs([bookSchema, personSchema,readingSchema,fieldScema])

export default typeDefs
