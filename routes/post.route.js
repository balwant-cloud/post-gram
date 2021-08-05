const PostController = require("../controllers/post.controller");

const helpers = require("../utils/helpers");
const PostInputSchema = require("./requestInputSchemas/post.input.schema");

module.exports = [
  {
    method: "GET",
    url: "posts",
    handler: PostController.getAllPosts,
  },
  {
    method: "POST",
    url: "post",
    preHandler: [
      (request, reply, next) => {
        request.query = helpers.validateInputs(
          PostInputSchema.addPost,
          request.body,
          reply
        );
        next();
      },
    ],
    handler: PostController.addPost,
  },
  {
    method: "PUT",
    url: "post/:post_id",
    preHandler: [
      (request, reply, next) => {
        request.query = helpers.validateInputs(
          PostInputSchema.addPost,
          request.body,
          reply
        );
        next();
      },
    ],
    handler: PostController.editPost,
  },
  {
    method: "DELETE",
    url: "post/:post_id",
    handler: PostController.deletePost,
  },
  {
    method: "POST",
    url: "post/:post_id/rating",
    preHandler: [
      (request, reply, next) => {
        request.query = helpers.validateInputs(
          PostInputSchema.ratePost,
          request.body,
          reply
        );
        next();
      },
    ],
    handler: PostController.ratePost,
  },
];
