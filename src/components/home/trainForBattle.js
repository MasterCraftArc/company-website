import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/card3.png";
import aquisitions from "../../images/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";
import Carousel from "../carousel/carousel";
import BattleCard from "./card";

const TrainForBattle = () => {
  return (
    <section id="trainForBattle" className="trainForBattle flex min-h-screen items-center">
      <div className="xl:w-4/5 lg:w-full w-3/4 mx-auto mt-10">
        
        <h2
          className={`${TITLE_TEXT} text-center font-bold mb-5`}
          style={battleText}
        >
          Let us Train you for Battle
        </h2>
        <h3 className="mt-0 mb-32 text-center italic text-blue-900 text-3xl">
          Whatever your mission, we have resources to help solve your software challenge.
        </h3>

        <Carousel>
          <BattleCard 
            heading="Small Business" 
            image={heroes} 
            title="Explore Learning" 
            subtitle="Path 1:" 
            mainText="Get support on DoD 21.3 SBIR/STTR"
            cardLink="/contact"
          />

          <BattleCard 
            heading="Government" 
            image={aquisitions} 
            title="Explore Learning" 
            subtitle="Path 2:" 
            mainText="Attend DevSecOps Training"
            cardLink="/training"
          />

          <BattleCard 
            heading="All Heroes" 
            image={devSecOps} 
            title="Explore Learning" 
            subtitle="Path 3:" 
            mainText="Explore DevSecOps Content"
            cardLink="/equip"
          />   

        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
