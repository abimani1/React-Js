const express=require('express')
const app=express()
const cors=require('cors')
// const mongoose=require('mongoose')

//Data
const studentData=[
    {   userId:101,
        StudentName:"Mani",
        department:"CS"
    },
    {
        userId:102,
        StudentName:"Kamal",
        department:"Bio"
    },
    {
        userId:103,
        StudentName:"Raja",
        department:"Civil"
    },
    {
        userId:104,
        StudentName:"Suji",
        department:"CS"
    },
    {
        userId:105,
        StudentName:"Arun",
        department:"Civil"
    },
    {
        userId:106,
        StudentName:"Arul",
        department:"Bio"
    },
]

// app.use(express.json)
// const mongoose=require('mongoose')

// const connectDB= async()=>{
//     try{
//         const connect=await mongoose.connect(process.env.URL,{

//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//         });
//         console.log(`MongoDB Connected`.cyan.underline);
//     }catch(error){
//         console.log(`Error: ${error.message}`.red.bold);
//         process.exit();        
//     }
// }

// connectDB()

app.use(cors());

app.post(`/api/student/post`,(req,res)=>{
//     let len=studentData.length+1
//     // const{userId,StudentName,department}=req.body

//     console.log(req.body);
//    const datast= {userId:userId,StudentName:StudentName,department:department}
//     studentData[len]=datast
//     res.send(studentData)
console.log(res);
console.log(req);
studentData=JSON.parse(req)
// console.log(req);
})

app.delete(`/api/student/:id`,(req,res)=>{

    res.send(studentData)
})

app.get(`/api/student/select/:id`,(req,res)=>{
    studentData.userId
    res.send(studentData)
})

app.get(`/api/student/get`,(req,res)=>{
    res.send(studentData)
})
app.listen(4000,()=>{console.log(`4000 server running`);})