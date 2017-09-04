import _ from 'lodash';
import Sequelize from 'sequelize';
import casual from 'casual';

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
});

const AuthorModel = db.define('author', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

const PostModel = db.define('post', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

casual.seed(111);
db.sync({
  force: true,
})
  .then(() => {
    _.times(10, () => {
      return AuthorModel.create({
        firstName: casual.first_name,
        lastName: casual.last_name,
      })
      .then((author) => {
        _.times(3, () => {
          return author.createPost({
            title: `A post by ${author.firstName}`,
            content: casual.sentences(3),
          });
        });
      });
    });
  });

const Author = db.models.author;
const Post = db.models.post;

export {
  Author,
  Post,
};
