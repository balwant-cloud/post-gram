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
  //   models.chefs
  //     .find()
  //     .populate({
  //       path: "user",
  //       select:
  //         "-createdAt -favorite_campaigns -addresses -notification_settings -updatedAt -__v -linked_user_ids",
  //     })
  //     .then((result) => {
  //       return helpers.sendSuccessResponse(
  //         messages.common_reply_messages.success,
  //         result,
  //         reply,
  //         1
  //       );
  //     })
  //     .catch((error) => {
  //       console.log("Error in getAllChefs", error);
  //       return helpers.sendErrorResponse(
  //         messages.common_reply_messages.error_unknown
  //       );
  //     });
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
