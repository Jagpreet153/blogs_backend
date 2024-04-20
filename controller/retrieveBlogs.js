const Blog = require("../model/blog") 

exports.retrieveBlogs=async (req,res)=>{

    const like= req.params.likes;
    try{
        
        const item= await Blog.find({likes:like})

        if(!item){
            return res.status(404).json({
                success: false,
                message : "Not Found"
            })
        }
        else
        {
            res.status(200).json({
                success: true,
                data:item,
            
            })
        }
    }

    catch(err){
        console.error()
        res.status(500).json({
            success:false,
           error:err.message,
           message:"Server Error"

        })
    }
}