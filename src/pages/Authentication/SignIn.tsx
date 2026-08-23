import { Link, useNavigate  } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

function SignIn() {
  const {signInHandler} = useAuthContext()
  const navigate = useNavigate()
  const loginHandler = async ()=>{
  await signInHandler(nameInput , passInput , 30)
  navigate("/dashboard") 
  }
  const [nameInput, setNameInput] = useState("")
  const [passInput, setPassInput] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="
        w-full
        max-w-md
        bg-white
        rounded-[20px]
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        p-8
        text-right
      ">

        <h1 className="
          text-xl!
          font-bold
          text-gray-900
          mb-3
        ">
          ورود به حساب کاربری
        </h1>

        <p className="
          text-gray-500
          mb-8
        ">
          user: emilys 
        </p>
        <span> password: emilyspass</span>


        <form className="space-y-5">

          <div>
            <label className="
              block
              text-gray-700
              mb-2
              font-medium
            ">
              نام کاربری
            </label>

            <input
              type="text"
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                p-3
                outline-none
                focus:border-blue-600
                transition
              "
              onChange={(e)=>setNameInput(e.target.value)}
            />
          </div>


          <div>

            <label className="
              block
              text-gray-700
              mb-2
              font-medium
            ">
              رمز عبور
            </label>

            <input
              type="password"
              placeholder="********"
              autoComplete="current-password"
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                p-3
                outline-none
                focus:border-blue-600
                transition
              "
              onChange={(e)=>setPassInput(e.target.value)}
            />

          </div>


          <div className="
            flex
            justify-between
            items-center
            text-sm
          ">

            <label className="
              flex
              items-center
              gap-2
              text-gray-500
            ">
              <input type="checkbox" />
              مرا به خاطر بسپار
            </label>


            <a className="
              text-blue-600
              hover:text-blue-700
              cursor-pointer
            ">
              فراموشی رمز؟
            </a>

          </div>

          <Button  className="w-full" type="button" onClick={loginHandler}>ورود</Button>


        </form>


        <div className="
          mt-6
          text-center
          text-gray-500
        ">

          حساب ندارید؟

          <Link to='/sing-up'>
                    <span className="
            text-blue-600
            font-medium
            mr-2
            cursor-pointer
          ">
            ثبت نام
          </span>
          </Link>

        </div>


      </div>

    </div>
  )
}

export default SignIn;