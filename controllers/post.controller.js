const models = require("../database/models");

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
 * Get a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.getPost = (request, reply) => {};

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
exports.deletePost = (request, reply) => {};

/**
 * Rate a post
 * @param {Request} request
 * @param {Response} reply
 */
exports.ratePost = (request, reply) => {};
