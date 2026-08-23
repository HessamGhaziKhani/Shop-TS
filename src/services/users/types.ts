
export interface IAuthContextProvider{
    children : React.ReactNode
}

export interface IUserData{
        id:number
        username:string
        email:string
        firstName:string
        lastName:string
        gender:string
        image:string
}

 export interface IAuthContext{
    isLogin : boolean
    signInHandler : (
    username: string,
    password: string,
    expiresInMins: number
    )=> void
    signOutHandler : ()=> void
    userData: IUserData | null
}

