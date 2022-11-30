const mongoose=require('mongoose');
 var imageSchema=mongoose.Schema(
    {
      name:String,
      desc:String,
      img:{
        data:Buffer,
        contentType:String
      }
    }
 );

 module.exports=new mongoose.model('image',imageSchema);