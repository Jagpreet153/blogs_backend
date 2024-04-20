const Blog = require("../model/blog") 

exports.updateLikes=async (req,res)=>{
    
    try{
        const id= req.params.id;
        const {likes}= req.body;
        const blog= await Blog.findByIdAndUpdate(
            {_id :id},
            {likes:likes});
            
    
            res.status(200).json({
                success: true,
                data: blog,
                message:"Updated Likes",
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