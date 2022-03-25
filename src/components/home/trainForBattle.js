import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/home/card3.png";
import aquisitions from "../../images/home/card2.png";
import Carousel from "../carousel/carousel";
import BattleCard from "./battleCard";

const TrainForBattle = () => {
  return (
    <section
      id="trainForBattle"
      className="trainForBattle flex flex-col md:justify-center relative mt-20"
    >

      <div className="w-11/12 sm:w-5/6  md:w-full mx-auto mt-16 md:mt-10">
        <h2
          className={`xl:text-6xl text-3xl sm:text-4xl mb-5 sm:pl-4 md:pl-16 lg:pl-32 2xl:pl-44 flex items-center font-medium sm:font-bold text-blue-900 w-full`}
        >
          
          Let us train you for battle
        </h2>
        <h3 className="mt-0 mb-12 text-blue-900 text-2xl sm:text-3xl pl-4 md:pl-16 lg:pl-32  2xl:pl-44 ">
          Whatever your mission, we have the resources to  
          <span className="md:block xl:inline xl:pr-96 2xl:pr-0"> help solve your software challenge.</span>
        </h3>

        <Carousel>
          <BattleCard
            heading="Small Business"
            image={heroes}
            mainText="Get Support on DoD 21.3 SBIR/STTR"
            cardLink="/contact"
            gtmLabel="SBIR/STTR Advice"
          />

          <BattleCard
            heading="Government"
            image={aquisitions}
            mainText="Attend DevSecOps Training Course"
            cardLink="/training"
            gtmLabel="DevSecOps training"
          />

          <BattleCard
            heading="All Heroes"
            image={devSecOps}
            mainText="Explore Digital Transformation Content"
            cardLink="/train"
            gtmLabel="Blog"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
