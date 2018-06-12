const express= require('express');
const router= express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
      message:"Handling get request to products"
    });
  });
  router.get('/:id',(req,res,next) => {
      const id=req.params.id;
      if(id ==="123"){
        res.status(200).json({
          message:"You discovered special id",
          id:id
        });
      }
      else{
        res.status(200).json({
          message:"You passed an id"
        });
      }
    });

  router.post('/',(req,res,next) => {
      res.status(201).json({
        message:"Handling post request to products"
      });
  });
  router.delete('/:id',(req,res,next) => {
      res.status(200).json({
        message:"Handling delete request to products"
      });
    });
    router.patch('/:id',(req,res,next) => {
        res.status(200).json({
          message:"Handling update request to products"
        });
      });


      module.exports=router;
