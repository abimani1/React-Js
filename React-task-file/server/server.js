const express=require('express')
const app=express()
const cors=require('cors')
const {studentData}=require('../server/Data')

app.use(cors());


app.get(`/api/student/get`,(req,res)=>{
    res.send(studentData)
})

app.get(`/api/student/get/:id`,(req,res)=>{
    var id = req.params.id;
    res.send(   studentData.find(studentData=>
              studentData.id==id
     ))
    }
        // studentData.forEach((studentData)=>{
        //     if(studentData.id==id){
        //         res.send(studentData)
        //     }
        // })
)

app.listen(4000,()=>{console.log(`4000 server running`);})