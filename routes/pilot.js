const express = require('express')
const pilotsRouter = express.Router()
const {index, create,createComment, update, destroy} = require('../controllers/pilot.js')


/*const{
    index,
    create,
    update,
    destroy
} = require("./controllers/gifs.js");*/

//ROUTES!
//get all posts
pilotsRouter.get("/", index);
//create a new comments
pilotsRouter.post("/comment", createComment);
//create a new posts
pilotsRouter.post("/", create);
//updating a posts
pilotsRouter.put("/:id", update)
//destroy a posts
pilotsRouter.delete("/:id", destroy)

module.exports = pilotsRouter