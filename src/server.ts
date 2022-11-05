import express, {json}  from 'express'
import cors from 'cors'
import { TaskTwoInterface,operation,RequestInterface } from './Interface/interface'


const app =express()

app.use(json())
app.use(cors())

const port=process.env.PORT || 3000

app.post("/" ,async(req,res)=>{
    try {



        let {x,y,operation_type}:RequestInterface=req.body
        if(!operation_type || !x || !y){
            res.status(400).send("Enter corrects inputs ")


        }
        
        const intX = Number(x)
        const intY = Number(x)

        let result;

        if(operation_type=="addition"){
            result=intX+intY
        }
        else if(operation_type=="subtraction"){
            result=intX-intY
        }
        else if( operation_type =="multiplication"){
            result=intX* intY

        }
        const outResult:TaskTwoInterface={
            slackUsername:"Hezron Kiprop",
            operation_type,
            result
        };
        return res.json(outResult)
    } catch (error) {
        console.log(error);
        
    }
})



app.listen(port,()=>{
    console.log("ruuning at port" + port);
    
})