import React from 'react'
import Image from 'next/image'


const Hero =()=> {
  return (
    <div className="flex wrapper h-[550px] flex-col rounded-b-[48px] md:flex-row items-center justify-around bg-gray-100 p-8  space-y-8 md:mx-52">
      {/* Text Section */}
      <div className="wrapper text-center md:text-left">
        <p className="text-sm font-normal text-[#272343] ml-2 uppercase mb-2">Welcome to Chairy</p>
        <h1 className="text-2xl md:text-5xl font-bold text-[#272343] mb-4 w-[490px] h-[178px] ">
          Best Furniture
          Collection For Your Interior.
        </h1>
        <button className="bg-[#029FAE]  text-white px-6 py-[14px] rounded-lg text-[16px] font-medium hover:bg-teal-600">
          Shop Now →
        </button>
      </div>

      {/* Image Section */}
      <div className="flex w-[280px] h-[374px] mt-[115px]  ">
        <Image
          src="/images/Product Image.png"
          alt="Furniture Chair"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
export default Hero

export const HeroLogo=()=>{
  return(
    
       <div className=' home flex justify-center gap-20  ml-12'>
       <Image src="/images/Logo.png" alt="z" width={300} height={300}   className='w-[85px] h-[87px]'/>
         <Image src="/images/Logo1.png" alt="p" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo2.png" alt="q" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo3.png" alt="r" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo4.png" alt="s" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo5.png" alt="t" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo6.png" alt="u" width={300} height={300}  className='w-[85px] h-[87px]'/>
       </div>
       
    
  )
}