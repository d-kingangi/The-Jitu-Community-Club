import express, { NextFunction, Request, Response, json} from 'express';
import  membersRouter from './Routes/membersroutes'

const app = express();
app.use(json());

app.use('/members', membersRouter)

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 3300; 

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`); 
})
