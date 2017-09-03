import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Author {
	id: Int
	firstName: String
	lastName: String
	posts: [Post]
}

type Post {
	id: Int
	title: String
	text: String
	author: Author
}

type Query {
	author(firstName: String, lastName: String): Author
}

schema {
	query: Query
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
