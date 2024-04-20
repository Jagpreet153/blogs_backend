  const Blog = require("../model/blog")   // Importing todo 

exports.createBlog=async(req,res)=>{   // Async function is applied as it will wait for data

    try{

        // extract title and description from request 
        const {heading,description,likes,dislikes,comments} = req.body;

        // create object of todo and insert in db
        const response =await Blog.create({heading,description,likes,dislikes,comments});

        // send a json response with success flag
        res.status(200).json({
            success:true,
            data: response,
            message: "Entry created successfully"
    })
    }
    
    catch(err){
        console.error();
        console.log(err);
        res.status(500)
        .json({
                success : false,
                data: "internal server error",
                message:err.message,
            }
        )
    }
}