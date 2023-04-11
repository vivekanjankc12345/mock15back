const express =require("express");
const app=express();
var cors = require('cors')

 
app.use(cors({
  origin:"*"
}))
const {connection}=require("./Config/db")
const {postmodel}=require("./Model/Postmodel")
app.use(express.json());
app.get("/sort",async(req,res)=>{
  let que=req.body;
  let sortBy=req.query.sortby;
  console.log(sortBy)
  let order=req.query.order;
  console.log(order)
  let get=await postmodel.find(que);
  if(sortBy==="BudgetPerPerson" && order==="asc")
  {
    get.sort((a,b)=>{
      return a.BudgetPerPerson-b.BudgetPerPerson;
    })
    res.send(get)
  }
  if(sortBy==="BudgetPerPerson" && order==="desc")
  {
    get.sort((a,b)=>{
      return b.BudgetPerPerson-a.BudgetPerPerson;
    })
    res.send(get)
  }
 
 
})
app.get("/get",async(req,res)=>{
  try
  {
    let que=req.body;
    const get=await postmodel.find(que);
    res.send(get)
  }
  
    catch(err)
    {
      console.log(err)
  }
})
app.get("/filter",async(req,res)=>{
  try
  {
    let que=req.query;
    const get=await postmodel.find(que);
    res.send(get)
  }
  
    catch(err)
    {
      console.log(err)
  }
})
app.post("/post",async(req,res)=>{
  const payload=req.body;
  try{
 const post =new postmodel(payload);
 await post.save();
 res.send("data added sucessfully")
  }
  catch(err)
  {
    res.send(err)
  }
})
app.listen(8080,async()=>{
  try
  {
    await connection
    console.log("connected to db");
  }
  catch(err)
  {
 console.log(err)
  }
  console.log("8080 port working");
})