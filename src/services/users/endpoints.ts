import axios from "axios"

export async function login(username:string,password:string ,expiresInMins:number) {
  const {data} = await axios({
    method:"POST",
    url:"https://dummyjson.com/auth/login",
    data:{
      username,
      password,
      expiresInMins,
    }
  }
  )
  return data
}