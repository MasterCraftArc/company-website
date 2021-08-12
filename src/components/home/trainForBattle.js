import React from "react";
import { Link } from "gatsby";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/card3.png";
import aquisitions from "../../images/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";
import Carousel from "../carousel/carousel";
import BattleCard from "./card";

const TrainForBattle = () => {
  return (
    <section className="trainForBattle flex min-h-screen items-center">
      <div className="xl:w-4/5 lg:w-full w-3/4 mx-auto mt-10">
        <h2
          className={`${TITLE_TEXT} text-center font-bold mb-32`}
          style={battleText}
        >
          Let us Train you for Battle
        </h2>

        <Carousel>
          <BattleCard 
            heading="Small Business" 
            image={heroes} 
            title="Explore Learning" 
            subtitle="Path 1:" 
            mainText="Get support on DoD 21.3 SBIR/STTR"
          />

          <BattleCard 
            heading="Government" 
            image={aquisitions} 
            title="Explore Learning" 
            subtitle="Path 2:" 
            mainText="Attend DevSecOps Training"
          />

          <BattleCard 
            heading="All Heroes" 
            image={devSecOps} 
            title="Explore Learning" 
            subtitle="Path 3:" 
            mainText="Explore DevSecOps Content"
          />   

        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
