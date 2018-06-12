const express= require('express');
const router= express.Router();

router.post('/',(req,res,next) => {
  res.status(201).json({
    message:"Handling post request to oredrproducts"
  });
  });
  router.get('/:oredrid',(req,res,next) => {
      res.status(200).json({
        message:" order details",
        id:req.params.oredrid

      });
    });
    router.delete('/:oredrid',(req,res,next) => {
        res.status(200).json({
          message:"order deleted",
          id:req.params.oredrid

        });
      });


      module.exports=router;
