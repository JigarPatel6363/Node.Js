const blogModel = require("../model/blog");

const createBlog = async (req, res) => {
    try {
        let { title, content } = req.body;
        let findblog = await blogModel.findOne({ title });
        if (findblog) {
            res.status(409).json({
                msg: "Blog alredy exist"
            })
        } else {
            let blog = await blogModel.create({
                title, content, image: req.file.filename, user: req.session.user.id
            });
            res.status(201).json(blog);
        }
    } catch (error) {
        res.send(error.message)
    }
};

const getBlog = async (req, res) => {
    try {
        let allData = await blogModel.find();
        res.send(allData);
    } catch (error) {
        res.send(error.message);
    }
};

const readOneBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await blogModel.findById(id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
};

// const updateBlog = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let blog = await blogModel.findOne({ _id: id });
//         if (!blog) {
//             return res.status(400).send("Blog not found");
//         }
//         let { title, content} = req.body;
//         let data = await blogModel.findByIdAndUpdate(id, { title, content, image:req.file.filename });
//         res.send(data);
//     } catch (error) {
//         res.send(error.message);
//     }
// };

const deleteBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let blog = await blogModel.findOne({ _id: id });
        if (!blog) {
            return res.status(400).send("Blog not found");
        }
        let deleteBlog = await blogModel.findByIdAndDelete(id);
        console.log(deleteBlog);
        res.send("Blog deleted");
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = { createBlog, getBlog, readOneBlog, deleteBlog };