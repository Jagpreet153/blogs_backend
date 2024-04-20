const Blog = require('../model/blog');
const blog=require('../model/blog')

exports.updateComments=async(req,res) =>{
    try{
        const id=req.params.id;
        const {comments} = req.body;
        const blog=await Blog.findByIdAndUpdate(
            {_id:id},
            {comments:comments}
        )
        res.status(200).json({
            success: true,
            data: blog,
            message:"Comments Updated",
        })
        

    }

    catch(err){
        console.error();
        res.status(500).json({
            success: false,
            error:err.message,
            message:"Server Error",
        })
    }
}