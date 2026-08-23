import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAuthContext } from "../../context/AuthContext";


function Dashboard() {

  const {
    signOutHandler,
    userData
  } = useAuthContext();



  if (!userData) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center

        bg-gray-50
        dark:bg-[#1A222C]

        text-gray-600
        dark:text-gray-300
        "
      >

        کاربری وارد نشده است

      </div>

    );

  }





  return (


    <div
      className="
      min-h-screen
      bg-gray-50
      dark:bg-[#1A222C]

      py-8
      px-4
      "
    >



      <div
        className="
        max-w-md
        mx-auto

        bg-white
        dark:bg-[#24303F]

        rounded-3xl

        shadow-[0_10px_30px_rgba(0,0,0,0.08)]

        p-5
        sm:p-8

        text-center
        "
      >




        {/* Avatar */}

        <div
          className="
          w-24
          h-24

          mx-auto

          rounded-full

          bg-[#465871]

          flex
          items-center
          justify-center

          text-white

          text-3xl
          font-bold
          "
        >

          {userData.firstName?.charAt(0)}

        </div>







        {/* Name */}


        <h2
          className="
          mt-5

          text-2xl

          font-bold

          text-gray-900
          dark:text-white
          "
        >

          {userData.firstName} {userData.lastName}

        </h2>





        {/* Username */}

        <p
          className="
          text-gray-500
          dark:text-gray-300

          mt-2
          "
        >

          @{userData.username}

        </p>







        {/* Info */}


        <div
          className="
          mt-6

          space-y-3

          text-right
          "
        >



          <div
            className="
            bg-gray-50
            dark:bg-[#465871]

            rounded-xl

            p-4
            "
          >

            <span
              className="
              text-gray-400
              text-sm
              "
            >

              ایمیل

            </span>


            <p
              className="
              font-medium
              text-gray-900
              dark:text-white
              break-all
              "
            >

              {userData.email}

            </p>


          </div>






          <div
            className="
            bg-gray-50
            dark:bg-[#465871]

            rounded-xl

            p-4
            "
          >

            <span
              className="
              text-gray-400
              text-sm
              "
            >

              جنسیت

            </span>


            <p
              className="
              font-medium
              text-gray-900
              dark:text-white
              "
            >

              {userData.gender}

            </p>


          </div>




        </div>









        {/* Actions */}


        <div
          className="
          mt-6

          flex

          flex-col

          gap-3
          "
        >



          <Button

            variant="primary"

            onClick={signOutHandler}

          >

            ویرایش پروفایل

          </Button>





          <Button

            variant="danger"

            onClick={signOutHandler}

          >

            خروج

          </Button>





          <Link
            to="/"
          >

            <Button

              variant="primary"

              className="
              w-full
              "
            >

              صفحه اصلی

            </Button>


          </Link>




        </div>



      </div>



    </div>


  );

}


export default Dashboard;