import { request,response} from "express";
import NextFunction from "express"
import HttpExceptions from "../../../commons/httpException";
import HttpResponse from "../../../commons/httpResponse";
import userServices from "../../../appModule/userModule/user.services";

class userController{

 public async createUser(request:Request,response:response,next:any){
    try{
         const user = request.body;

         userServices.createUser(user,(err:any , result:any)=>{
           if(err){
            next(new HttpExceptions(400,err))
           }else{
            response.status(200).send(new HttpResponse("CreateUser",result,"user Creted Successfully",null,null,null))
           }
         })
    }catch(err){
       next(new HttpExceptions(400,"Something went wrong"))
       
    }
}



 }


export default new userController();