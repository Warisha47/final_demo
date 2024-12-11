
import { FaCheck } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const TopHeader=()=>{
      return(
        <div className=" md:h-[203px] w-[100%] md:wrapper md:w-[1990px]">
        <header className="md:h-[45px] w-full wrapper flex md:justify-between bg-[#272343] py-[14px] md:px-[200px] wrapper">
          <h3 className="opacity-[70%] md:h-[16px] ">
          <FaCheck className='text-[#FFFFFF]'/>
          <p className="font-[400px] text-[13px] -mt-4 ml-6 text-[#FFFFFF]"> Free shipping on all orders over $50</p>
          <div className="flex justify-between  items-center -mt-3 h-[10px] md:gap-[24px]">
           <select name="sel" id="sel" className="bg-[#272343] text-[#FFFFFF] text-[13px] ml-[250px] md:ml-[596px] ">
            <option value="english">Eng</option>
           </select>
           <p className="font-[400px] text-[13px] items-center text-[#F5F5F5]">Faqs</p>
           <p className="gap-[6px] text-[13px] flex text-[#F5F5F5]"><CiCircleAlert className="h-[16px] text-[13px] mt-0.5 w-[16px]"/>
           Need Help
           </p>
          </div>
          </h3>

          
        </header>
        {/* middle header */}
        <div className=" md:h-[84px]  py-[20px] md:px-[200px]  justify-evenly flex md:justify-between bg-[#F0F2F3]">
        <span className="gap-[8px] flex">
        <Image src="/images/Logo Icon.png" alt=" " width={100} height={100} className="w-full md:w-[40px] md:h-[40px]"/>
             <h2 className="w-[118px] h-[31px] font-[500px] text-[26px] text-[#272343] ">
              Comforty
             </h2>
             </span>

             {/*right section  */}

             <div className="md:w-[120px] h-[44px] gap-[12px] md:mr-12 rounded-lg py-[11px] px-[16px] bg-[#FFFFFF] flex">
            <LuShoppingCart className="w-[22px] h-[22px]"/>
              <h2 className="text-[16px] hover:cursor-pointer">Cart</h2>
             </div>
            </div>
            

            {/* Navbar */}

            <nav className="bg-[#FFFFFF] border-b-[1px] border-[#E1E3E5] px-2 md:flex md:justify-between md:py-[26px] md:px-[200px]">
           <ul className="md:gap-[32px] gap-7  flex font-[500px] text-[#636270] hover:cursor-pointer ">
            <li className=" hover:text-[#007580] "><Link href="/">Home</Link></li>
            <li className=" hover:text-[#007580] " ><Link href="/shop">Shop</Link></li>
            <li className=" hover:text-[#007580] "> <Link href="/product">Product</Link></li>
            <li className=" hover:text-[#007580] "> <Link href="/pages">Pages</Link></li>
            <li className=" hover:text-[#007580] "><Link href="/about">About</Link></li>
           </ul>
           <div className="w-[174px] h-[22px] md:mr-8 md:gap-[8px] flex">
            <p className="font-normal text-[14px] text-[#636270]">Contact:</p>
            <p className="text-[#272343] text-[14px]">(808) 555-0111</p>
           </div>

            </nav>
        </div>
        
        
      )
}
export default TopHeader
