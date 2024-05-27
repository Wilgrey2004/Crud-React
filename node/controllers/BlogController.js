import blogModel from "../models/blogModels.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ menssage: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog);
  } catch (error) {
    res.json({ menssage: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    await blogModel.create(req.body);
    res.json({
      message: "!Registro Creado!",
    });
  } catch (error) {
    res.json({ menssage: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    await blogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "!Registro Actualizado!",
    });
  } catch (error) {
    res.json({ menssage: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await blogModel.destroy({
      where: { id: req.params.id },
    });

    res.json({
      message: "!Registro Eliminado!",
    });
  } catch (error) {
    res.json({ menssage: error.message });
  }
};
