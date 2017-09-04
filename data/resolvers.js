import { Author, Post } from './connectors';

const resolvers = {
  Query: {
    author(ignoreParam, args) {
      return Author.find({ where: args });
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
};

export default resolvers;
