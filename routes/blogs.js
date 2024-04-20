const express = require('express');

const router=express.Router();

const {createBlog} = require("../controller/createBlog")
router.post("/createBlog" , createBlog);

const {retrieveBlogs} = require("../controller/retrieveBlogs")
router.get("/retrieveBlogs/:likes", retrieveBlogs)

const {updateLikes} = require("../controller/updateLikes")
router.put("/updateLikes/:id", updateLikes)

const {updateDislikes} = require("../controller/updateDisikes")
router.put("/updateDislikes/:id", updateDislikes)

const {updateComments} =require('../controller/updateComments')
router.put('/updateComments/:id',updateComments)

module.exports=router;