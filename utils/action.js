import { Post } from "./models";
import connetcToDb from "./utils";

export const addPost = async (formData) => {
  "use server"

  const {title, desc, slug, userId} = Object.fromEntries(formData);

  try {
    connetcToDb();
    const newPost = await new Post({title, desc, slug, userId});
    await newPost.save();
    console.log('save to DB');
  } catch (error) {
    console.log(error);
  }

}