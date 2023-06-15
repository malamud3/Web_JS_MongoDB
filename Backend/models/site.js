const mongoose= require('mongoose')

const siteSchema= new mongoose.Schema({
  name:{
   type:String,
   required: true
  },
  siteDescription:{
    type:String,
    required: true
  },
  imageUrl:{
    type:String,
    required: true
  }
})

module.exports= mongoose.model('Site',siteSchema)