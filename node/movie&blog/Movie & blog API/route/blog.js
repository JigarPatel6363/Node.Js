const express = require("express");
const route = express.Router();
const { createBlog, getBlog, readOneBlog, deleteBlog } = require("../controller/blog");
const authSession = require("../middleware/auth");
const upload = require("../middleware/uploadImg");
const { readOneData } = require("../controller/movie");


route.post("/create", authSession, upload.single("photo"), createBlog);
route.get("/getalldata", getBlog);
route.get("/getone/:id", readOneBlog);
// route.put("/update/:id", updateBlog);
route.delete("/delete/:id", deleteBlog)

module.exports = route;