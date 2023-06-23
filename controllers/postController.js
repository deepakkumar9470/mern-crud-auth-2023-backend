const Post = require('../models/Post');


module.exports.addPost = async (req, res) => {
    // retreive the info of user from frontend
  

    try{
        const newPost = new Post({
            title : req.body.title,
            description : req.body.description,
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getPosts = async (req, res) => {
    try{
       
        const posts = await Post.find().sort({_id : -1});
        res.status(200).json(posts);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getPostById = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.editPostById = async (req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, 
            {new:  true});
        res.status(200).json({msg : 'Post has been updated..',data: post});
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.deletePost = async (req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({msg : 'Post has been deleted..'});
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}



