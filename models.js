const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://umamahesh9447230:kazuto14@cluster0.eoieac4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const FoodSchema= new mongoSchema({
    fname:String,
    fprice:Number,
    imageUrl: String
   
})
var Food=mongoose.model("Food",FoodSchema)
module.exports=Food