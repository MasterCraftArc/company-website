import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/card3.png";
import aquisitions from "../../images/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";
import Carousel from "../carousel/carousel";
import BattleCard from "./card";

const TrainForBattle = () => {
  return (
    <section id="trainForBattle" className="trainForBattle flex flex-col min-h-screen justify-center py-44">
      <div className="w-3/4 md:w-full mx-auto mt-10">
        
        <h2
          className={`${TITLE_TEXT} font-bold mb-5 pl-4 md:pl-16 lg:pl-32 2xl:pl-44`}
          style={battleText}
        >
          Let us Train you for Battle
        </h2>
        <h3 className="mt-0 mb-32 text-blue-900 text-3xl pl-4 md:pl-16 lg:pl-32 2xl:pl-44">
          Whatever your mission, we the have resources to help solve your software challenge.
        </h3>

        <Carousel>
          <BattleCard 
            heading="Small Business" 
            image={heroes} 
            mainText="Get support on DoD 21.3 SBIR/STTR"
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
            cardLink="/equip"
          />   

        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
