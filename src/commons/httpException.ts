// export default class HttpException extends Error {
//     status: number;
//     message: string; 
//    constructor(status: number, message: string) {
//        super(message);
//        this.status = status;
//        this.message = message;
//    }
// }

class HttpExceptions{
    status : number;
    message : string;
 
    constructor(status:number , message : string){
     this.status=status;
     this.message= message;
    }
 }
 export default HttpExceptions;