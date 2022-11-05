import {Router} from "express"
import { RequestInterface, TaskTwoInterface } from "../Interface/interface"

const router=Router()



router.post("" ,async(req,res)=>{
    try {



        let {x,y,operation_type}:RequestInterface=req.body
        if(!operation_type || !x || !y){
            res.status(400).send("Enter corrects inputs ")


        }
        
        const intX = Number(x)
        const intY = Number(y)

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
export default router