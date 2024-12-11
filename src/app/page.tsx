

import Hero from "../Components/Hero";
import { HeroLogo } from "../Components/Hero";
import FeaturedProducts, { Categories, SubCategory } from "../Components/FeaturedProducts";
import OurProducts from "../Components/OurProducts";


export default function Home() {
  return (
   <div>
    
  <Hero/>
   <HeroLogo/>
   <FeaturedProducts/>
   <Categories/>
   <SubCategory/>
  <OurProducts/>
   
   
   </div>
  );
}
