const mongoose= require('mongoose') 
const BookScheme= new mongoose.Schema({ 
booktitle:{ type:String, required:true  }, 
PubYear:{type:Number}, 
author:{type:String}, 
Topic:{type:String},  
formate:{type:String} 
}) 
const Database = mongoose.model('bookcollection2',BookScheme) 
module.exports = Database