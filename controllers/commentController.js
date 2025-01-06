const CommentModel = require("../models/Comment");

const addComment = async (req, res) => {
  const commentBody = req.body;
  try {
    const comment = await CommentModel.create(commentBody);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllComments = async (req, res) => {  
  try {
    const comments = await CommentModel.find();
    res.send(comments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCommentsByPostId = async (req, res) => {
  const postId = req.params.id;
  try {    
    const comments = await Comments.find({ postId });
    res.send(comments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
      const id = req.params.id;
      const comment = req.body;
      const update = await CommentModel.findByIdAndUpdate(id, comment, { new: true });
      res.send(update);
  } catch (error) {
    res.status(400).send(error.message);
  }
}; 

const deleteComment = (req, res) => {
  console.log("Comment deleted");
  res.send("Comment deleted");
};

module.exports = {
  addComment,
  getAllComments,
  getCommentsByPostId,
  updateComment,
  deleteComment,
};