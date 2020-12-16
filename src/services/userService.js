import requestHeader from "./requestHeader";

class UserService {
  regUser=(user)=>{
      return requestHeader.post("register/",user)
  }

  postHistory=(token,gameResult)=>{
    return requestHeader.post("/history",gameResult, { headers: {Authorization:token}})
  }

  me=(token)=>{
    console.log(token)
    return requestHeader.get("me/",{headers: {Authorization:token}})
  }
}

export default new UserService();