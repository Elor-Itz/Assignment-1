const PostModel = require("../models/Post");

const getAllPosts = async (req, res) => {
  const filter = req.query.sender;
  try {
    if (filter) {
      const posts = await PostModel.find({ sender: filter });
      res.send(posts);
    } else {
      const posts = await PostModel.find();
      res.send(posts);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await PostModel.create(postBody);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const post = req.body;
      const update = await PostModel.findByIdAndUpdate(id, post, { new: true });
      return res.status(200).send(update);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  } else {
    console.log("Update Post Error");
  }
};

const deletePost = (req, res) => {
  console.log("delete a post");
  res.send("delete a post");
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
};
