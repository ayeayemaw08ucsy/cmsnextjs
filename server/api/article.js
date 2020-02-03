const Article = require('../models/Article');
//const User = require('../models/User');
const express = require('express');
const router = express.Router();


router.get('/article-list/:page/:total',async(req,res) => {
   // console.log('Article list param',req.params);
    let { page , total } = req.params;
   console.log('Second Calling',req.params,page,total);

    page = parseInt(page);
    total = parseInt(total);
    const limit = 5;
    const offset = (page*limit) - limit ;
  //  console.log('offset:limit',offset,":",limit);
    try {
        
        const articles = await Article.list({offset,limit,page,total});
        res.json(articles);
    }catch(err) {
        res.json({error:err.message || err.toString});
    }
  
})

router.post('/articles/add',async(req,res) => {
  
    try {
        const articles = await Article.add(Object.assign({},req.body));
        res.json(articles);
    }catch(err) {
        res.json({error: err.message || err.toString()});
    }
    
})

router.get('/detail/:_id/:slug',async(req,res) => {
   
    try{
        const article = await Article.getByIdAndSlug({_id:req.params._id, slug:req.params.slug});
        res.json(article);
    }catch(err) {
         res.json({ error: err.message || err.toString()});
    }
})

router.get('/count',async(req,res) => {
    try{
        const num = await Article.getTotalCount();
        res.json(num);
    }catch(err) {
         res.json({ error: err.message || err.toString()});
    } 
})
module.exports = router;
