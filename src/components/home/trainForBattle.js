import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/card3.png";
import aquisitions from "../../images/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";
import Carousel from "../carousel/carousel";
import BattleCard from "./card";
import Button from "../button";

const TrainForBattle = () => {
  return (
    <section id="trainForBattle" className="trainForBattle flex flex-col min-h-screen justify-center">
      <div className="w-3/4 md:w-full mx-auto mt-10">
        
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
            mainText="Get support on DoD 21.3 SBIR/STTR"
            cardLink="/contact"
          />

          <BattleCard 
            heading="Government" 
            image={aquisitions} 
            mainText="Attend DevSecOps Training"
            cardLink="/training"
          />

          <BattleCard 
            heading="All Heroes" 
            image={devSecOps} 
            mainText="Explore DevSecOps Content"
            cardLink="/equip"
          />   

        </Carousel>
      </div>
      <div className="pt-16 mx-auto">
            <Button
              linkTo="/contact"
              className="bg-transparent border-blue-900 border-2 border-solid hover:bg-blue-900 text-blue-900 hover:text-white"
              text="Contact Us"
            />
      </div>
    </section>
  );
};

export default TrainForBattle;
