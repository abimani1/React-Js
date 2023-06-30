const express=require('express')
const app=express()
const cors=require('cors')
const {studentData}=require('../server/Data')
// const mongoose=require('mongoose')

//Data

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


app.get(`/api/student/get`,(req,res)=>{
    res.send(studentData)
})

app.get(`/api/student/get/:id`,(req,res)=>{
    var id = req.params.id;
        // console.log(id);
        // res.send('got it');
        studentData.forEach((studentData)=>{
            if(studentData.id==id){
                res.send(studentData)
            }
        })
});


app.listen(4000,()=>{console.log(`4000 server running`);})