import express, {json}  from 'express'
import cors from 'cors'

import router from './routes/routes'

const app =express()

app.use(json())
app.use(cors())

const port=process.env.PORT || 3000


app.use('/api', router)



app.listen(port,()=>{
    console.log("ruuning at port" + port);
    
})