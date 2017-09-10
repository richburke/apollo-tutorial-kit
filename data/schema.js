import {
  makeExecutableSchema,
  //addMockFunctionsToSchema,
} from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

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
	content: String
	author: Author
	views: Int
}

type Query {
	author(firstName: String, lastName: String): Author
}

schema {
	query: Query
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
