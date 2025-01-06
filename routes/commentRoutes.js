const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController");

router.post("/", commentsController.addComment);

router.get("/", commentsController.getAllComments);

router.get("/:postId", commentsController.getCommentsByPostId);

router.put("/:id", commentsController.updateComment);

router.delete("/:id", commentsController.deleteComment);

module.exports = router;