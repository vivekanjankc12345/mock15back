const express =require("express");
const app=express();
const {connection}=require("./Config/db")
const {postmodel}=require("./Model/Postmodel")
app.use(express.json());
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