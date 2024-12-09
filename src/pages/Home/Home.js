
import React from "react";
import ProductCard from '../../components/ProductCard/ProductCard'
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import Parallax from "../../components/Parallax/Paralax";
import CircularCards from "../../components/CircularCards/CircularCards";

const Home = () => {
 

  return (
    <div>
       <SliderComponent/> 
       <ProductCard/> 
       <Parallax />
       <CircularCards/>
    </div>
  );
};

export default Home;
