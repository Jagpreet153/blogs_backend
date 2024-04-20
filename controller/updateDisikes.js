const Blog = require("../model/blog") 

exports.updateDislikes=async (req,res)=>{
    
    try{
        const id= req.params.id;
        const {dislikes}= req.body;
        const blog= await Blog.findByIdAndUpdate(
            {_id :id},
            {dislikes:dislikes});
            
    
            res.status(200).json({
                success: true,
                data: blog,
                message:"Updated dislikes of this blog",
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
    


