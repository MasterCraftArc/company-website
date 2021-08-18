import React from "react";
import heroes from "../../images/unicornHeroes.png";
import devSecOps from "../../images/home/card3.png";
import aquisitions from "../../images/home/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";
import Carousel from "../carousel/carousel";
import BattleCard from "./card";
import unicorn from "../../images/unicornSingle.png"

import pin from "../../images/locationPin.png"

const TrainForBattle = () => {
  return (
    <section id="trainForBattle" className="trainForBattle flex flex-col min-h-screen justify-center py-44 relative"
    // style={{
    //   backgroundImage: {unicorn},
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover'
    // }} 
    >
      <img className="absolute top-11  invisible md:visible" src={unicorn} alt="Unicorn standing on card" style={ {right: '8%', width: '150px', zIndex: '-2'} }/>

      <div 
        className="w-5/6  md:w-full mx-auto mt-10 " 
      >
        <div>

        </div>
        <h2
          className={`${TITLE_TEXT} font-bold mb-5 sm:pl-4 md:pl-16 lg:pl-32 2xl:pl-44 flex items-center`}
          style={battleText}
        >
          <img className="justify-self-bottom" style={ {maxWidth:"60px"} } src={pin} alt="Unicorn standing on card"/>
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
