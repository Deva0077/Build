import CrudOperations from "../../../utils/mongoCrud";
import User from "../../models/user.entity"


class userServices{

   public async createUser(body: any,next:any) {
    try {
        await new CrudOperations(User).save(body).then(async (result: any) => {
            next(null, result);
        }).catch((error: any) => { next(error); });
    }
    catch (err) {
        console.log("New User ->", err);
        next("Something went wrong");

    }
}
}
export default new userServices();