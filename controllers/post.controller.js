const models = require("../database/models");
const helpers = require("../utils/helpers");
const { messages } = require("../config/messages");

/**
 * Get all posts
 * @param {Request} request
 * @param {Response} reply
 */
exports.getAllPosts = (request, reply) => {
  models.post
    .find()
    .select("-id -__v")
    .then((posts) => {
      return helpers.sendSuccessResponse(
        messages.common_reply_messages.success,
        posts,
        reply
      );
    })
    .catch((error) => {
      return helpers.sendErrorResponse(error, reply);
    });
};

/**
 * Add a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.addPost = (request, reply) => {
  models.post
    .create(request.body)
    .then((success) => {
      return helpers.sendSuccessResponse(
        messages.common_reply_messages.success_post_added,
        {},
        reply,
        1
      );
    })
    .catch((error) => {
      return helpers.sendErrorResponse(error, reply);
    });
};

/**
 * Edit a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.editPost = (request, reply) => {};

/**
 * Delete a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.deletePost = (request, reply) => {
  models.post
    .deleteOne({ _id: request.params.post_id })
    .then(() => {
      return helpers.sendSuccessResponse(
        messages.common_reply_messages.success_post_deleted,
        {},
        reply,
        1
      );
    })
    .catch((error) => {
      return helpers.sendErrorResponse(error, reply);
    });
};

/**
 * Rate a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.ratePost = (request, reply) => {};
