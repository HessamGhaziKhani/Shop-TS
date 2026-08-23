import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import QuantityControl from "../../components/quantityControl/QuantityControl";
import Loader from "../../components/loader/Loader";
import { useGetProduct } from "../../services/product/hooks";

function ProductPage() {

  const param = useParams<{ id: string }>();

  const productId = Number(param.id);

  const {data : product , isLoading} = useGetProduct(productId)





  if(isLoading){
    return <Loader />;
  }



  if(!product){

    return (
      <Container>
        <div className="
        py-20
        text-center
        text-gray-500
        dark:text-gray-300
        ">
          محصول پیدا نشد
        </div>
      </Container>
    );

  }




  return (

    <Container>

      <div
        className="
        my-8
        overflow-hidden
        rounded-2xl
        bg-white
        dark:bg-[#24303F]
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
      >



        {/* Main Product */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          sm:gap-10
          p-5
          sm:p-8
          "
        >



          {/* Image */}

          <div
            className="
            w-full
            h-72
            sm:h-96
            overflow-hidden
            rounded-2xl
            "
          >

            <img
              src={product.image}
              alt={product.title}
              className="
              w-full
              h-full
              object-cover
              transition
              duration-300
              hover:scale-105
              "
            />

          </div>





          {/* Info */}

          <div
            className="
            flex
            flex-col
            justify-center
            text-right
            "
          >



            <h1
              className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-5
              text-gray-900
              dark:text-white!
              "
            >
              {product.title}
            </h1>




            <p
              className="
              text-gray-500
              dark:text-gray-300
              leading-loose
              mb-6
              "
            >
              {product.description}
            </p>





            {/* Price Box */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-5
              p-5
              rounded-2xl
              bg-gray-100
              dark:bg-[#465871]
              "
            >



              {/* Price */}

              <div className="text-right">

                <span
                  className="
                  block
                  text-sm
                  mb-2
                  text-gray-500
                  dark:text-gray-200
                  "
                >
                  قیمت:
                </span>


                <span
                  className="
                  text-xl
                  font-bold
                  text-blue-600
                  "
                >
                  {product.price.toLocaleString("Fa-IR")} تومان
                </span>


              </div>






              {/* Quantity */}

              <QuantityControl 
                productId={productId}
              />



            </div>


          </div>



        </div>







        {/* Description */}

        <div
          className="
          border-t
          border-gray-200
          dark:border-gray-700
          p-5
          sm:p-8
          text-right
          "
        >


          <h2
            className="
            text-xl
            font-bold
            mb-4
            text-gray-900
            dark:text-white
            "
          >
            توضیحات محصول
          </h2>



          <p
            className="
            text-gray-500
            dark:text-gray-300
            leading-loose
            "
          >
            {product.description}
          </p>


        </div>



      </div>


    </Container>

  );
}


export default ProductPage;