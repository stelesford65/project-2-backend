const Pilot = require("../models/pilot.js")
const Comment = require("../models/comment.js");
const { findById } = require("../models/pilot.js");

//INDEX - GETS ALL pilot posts
const index = async (req,res) => { 
   try{
    const allPilots = await Pilot.find({}).populate("comments");
    res.status(200).json(allPilots)
   }catch(error){
        res.status(400).send(error)
   }
};
//Create - Makes a new comment
const createComment = async(req,res) =>{
    try{
        // Finding each post by it's ID. Post_id is the attribute of the request body
       const post = await Pilot.findById(req.body.post_id)
       //New object with attribute "text" that with a text String
       const newComment = await Comment.create({text:req.body.text})
       //Pushes an id to the end the the comments object ID array
       post.comments.push(newComment._id)
       post.save()//Saving the post 
       //Next line isn't required because we don't need to find comments
       //const allComments= await Comment.find({});
       res.status(201).json(post); //Status 201: Something was successfully created
    }
     catch(error){
            res.status(400).send(error)
       }
};



//CREATE - Makes a new pilot post
const create = async(req,res) =>{
    try{
       const newPilots = await Pilot.create(req.body)
       const allPilots= await Pilot.find({});
       res.status(200).json(allPilots);
    }
     catch(error){
            res.status(400).send(error)
       }
};

//Update - update a pilot post 

const update = async(req,res) =>{
try{
    const updatedPilot = await Pilot.findByIdAndUpdate(req.params.id, req.body,
        {new:true})
      //  const allPilots = await Pilot.find({});
        res.status(200).json(updatedPilot)
   
 }
  catch(error){
         res.status(400).send(error)
    }
};

//destroy - deletes a pilot post

const destroy = async(req,res) =>{
    try{
        const deletedPilot = await Pilot.findByIdAndDelete
        (req.params.id);
            res.status(200).json(deletedPilot);
     }
      catch(error){
             res.status(400).send(error)
        }
    };
module.exports = {
    index,
    createComment,
    create,
    update,
    destroy
}