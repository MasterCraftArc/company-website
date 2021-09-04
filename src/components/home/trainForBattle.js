import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/home/card3.png";
import aquisitions from "../../images/home/card2.png";
import Carousel from "../carousel/carousel";
import BattleCard from "./battleCard";
import unicorn from "../../images/unicornSingle.png";
import pin from "../../images/locationPin.png";

const TrainForBattle = () => {
  return (
    <section
      id="trainForBattle"
      className="trainForBattle flex flex-col md:min-h-screen md:justify-center md:py-44 relative"
    >
      <img
        className="absolute top-7 invisible md:visible"
        src={unicorn}
        alt="Unicorn standing on card"
        style={{ right: "11%", width: "150px", zIndex: "-2", paddingTop: "6%" }}
      />

      <div className="w-11/12 sm:w-5/6  md:w-full mx-auto mt-16 md:mt-10">
        <h2
          className={`xl:text-6xl text-3xl sm:text-4xl mb-5 sm:pl-4 md:pl-16 lg:pl-32 2xl:pl-44 flex items-center font-medium sm:font-bold text-blue-900 w-full`}
        >
          <img
            className=" pinMobile md:pinDesktop mr-2"
            src={pin}
            alt="Unicorn pin"
          />
          Let us train you for battle
        </h2>
        <h3 className="mt-0 mb-12 text-blue-900 text-2xl sm:text-3xl pl-4 md:pl-16 lg:pl-32  2xl:pl-44 ">
          Whatever your mission, we the have resources to  
          <span className="md:block xl:inline xl:pr-96 2xl:pr-0"> help solve your software challenge.</span>
        </h3>

        <Carousel>
          <BattleCard
            heading="Small Business"
            image={heroes}
            mainText="Get Support on DoD 21.3 SBIR/STTR"
            cardLink="/contact"
          />

          <BattleCard
            heading="Government"
            image={aquisitions}
            mainText="Attend DevSecOps Training Course"
            cardLink="/training"
          />

          <BattleCard
            heading="All Heroes"
            image={devSecOps}
            mainText="Explore Digital Transformation Content"
            cardLink="/train"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
