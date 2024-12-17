import { Post, User } from "./models";
import connetcToDb from "./utils";

export const getPosts = async () => {
  try {
    connetcToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
}

export const getPost = async (slug) => {
  try {
    connetcToDb();
    const post = await Post.find({slug});
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
}

export const getUser = async (id) => {
  try {
    connetcToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
}

export const getUsers = async () => {
  try {
    connetcToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
}