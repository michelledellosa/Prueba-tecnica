import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import CategoriesSlider from "../components/CategoriesSlider";
import FoodList from "../components/FoodList ";
import Cards from "../components/Cards";
import MyCart from "../components/MyCart";

const Dashboard = () => {
  
  return (
    <div className="flex flex-wrap">
   
        <div className="hidden sm:block pb-5">
          <Sidebar />
        </div>
    
      <div className="ml-0 sm:ml-20 flex flex-1" >
        <div className="w-full block">
          <Header />
          <div className=" flex flex-col lg:flex-row w-full ">
            <div className="lg:w-4/5 ">
              <HeroImage />
              <CategoriesSlider />
              <FoodList />
            </div>
            <div className="lg:w-1/5 mt-4 lg:mt-0">
              <div className="hidden lg:block">
                <Cards />
                <MyCart />
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-4">
            <Cards />
            <MyCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
