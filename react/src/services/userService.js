import axios from "axios"
const USER_API_BASE_URL="http://localhost:8083/signup";

class userService{
    user(user){
        return axios.post(USER_API_BASE_URL,user);
    }
}
export default new userService()