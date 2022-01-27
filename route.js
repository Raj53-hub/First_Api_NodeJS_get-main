var express = require('express')
var router = express.Router();
var movies = require('.moduels/movies')

router.get("/movies", async(req,res)=>{
    const imovie = await movies.find();
    res.send(imovie);
    console.log(imovie);
})

router.patch('/movies/:id',async (req,res)=>{
    const imovie = await movies.findOne({_id:req.params.id})
    imovie.name = req.body.name
    imovie.rating = req.body.rating

    await imovie.savw((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})

router.delete('/movies/:name',async (req,res)=>{
    await movies.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})
