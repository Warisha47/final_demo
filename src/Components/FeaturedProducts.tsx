import { Inter,Roboto } from 'next/font/google';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai'; 

const inter = Inter({ subsets: ["latin"] });

const FeaturedProducts = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 wrapper">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className={`${inter.className}-mb-9 text-[24px] wrapper tracking-tight font-semibold text-[#272343] dark:text-white`}>
              Featured Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image.png" alt="Image 1" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28 ">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$29.99</p>
                <div className="flex justify-end w-full ">
                <AiOutlineShoppingCart className="-mt-12 -ml-24 hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
              </div>
              
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image1.png" alt="Image 2" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16 hover:bg-[#007580] -ml-24  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image2.png" alt="Image 3" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16 hover:bg-[#007580] -ml-24 w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image3.png" alt="Image 4" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16  hover:bg-[#007580] -ml-24  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;


export const Categories = ()=>{
  
    return(
      <div>
        <section className="text-gray-600 body-font -mt-11">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-start w-full mb-2">
      <h1 className="m:text-3xl text-[32px] font-medium title-font mb-4 text-[#272343]">
      Top categories
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
          
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/Category.png"
            width={400}
            height={400}
          />
          <div className="px-8 py-10 h-96 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
         
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
          
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/Category1.png"
          width={400}
          height={400}
        />
          <div className="px-8 h-96 py-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
          
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/Category2.png"
          width={400}
          height={400}
        />
          <div className="px-8 h-96 py-10  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
)}


      export const SubCategory=()=>{
      
        return(
          <div className='w-[1200px] h-[648px] -mt-[13px] '>
            <p className =" w-[470px] mt-[248px] font-normal text-[34px] text-[#000000] h-[15px] -rotate-90 ml-[-52px]">Explore new and popular styles</p>
            
            <div className='w-[1280px] h-[28px]  mb-[598px] ml-[323px]'>
              
            <Image src="/images/Image2.png" alt="" width={400} height={400} className=" h-[496px] pb-16 rounded-none w-[460px] -mt-56 -ml-20 "/>


            <div className='w-[200px] h-[200px] -mt-[490px]  '>
              <Image src={"/images/Image3.png"} alt="chair" width={300} height={300} className=' ml-[395px] pb-5 '/>
              <Image src={"/images/graychair.png"} alt="chair" width={300} height={300} className=' ml-[395px] pb-5 '/>
              <Image src={"/images/Image.png"} alt="chair" width={300} height={300} className=' ml-[624px] pb-5 -mt-[438px] '/>
              <Image src={"/images/Image.png"} alt="chair" width={300} height={300} className=' ml-[624px] pb-5 '/>
            </div>
             </div>
           
           
            
          </div>
        )
      }
     
      
  
  