const express = require("express");

const Product = require("../models/product.model")

const router = express.Router();

router.post("/product",async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(201).send(product)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

router.get("/product/:id",async(req,res)=>{
    try{
        const product = await Product.findById().lean().exec()
        console.log(product)
        res.render("/product", {product:product})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})






module.exports = router