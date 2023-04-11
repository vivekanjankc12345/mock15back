const mongoose=require("mongoose");
const postschema=mongoose.Schema({
  name:String,
  email:String,
  destination:String,
  nooftravellers:Number,
  BudgetPerPerson:Number
})
const postmodel=mongoose.model("postdata",postschema);
module.exports={
  postmodel
}