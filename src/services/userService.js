import requestHeader from "./requestHeader";

class UserService {
  regUser=(user)=>{
      return requestHeader.post("register/",user)
  }
}

export default new UserService();