import { Author, Post, View } from './connectors';

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
    views(post) {
      return View.findOne({ postId: post.id })
        .then((view) => view.views);
    },
  },
};

export default resolvers;
