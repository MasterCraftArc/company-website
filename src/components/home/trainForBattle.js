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
        style={{ right: "14%", width: "150px", zIndex: "-2", paddingTop: "6%" }}
      />

      <div className="w-11/12 sm:w-5/6  md:w-full mx-auto mt-16 md:mt-10">
        <h2
          className={`xl:text-6xl text-3xl sm:text-4xl mb-5 sm:pl-4 md:pl-16 lg:pl-32 2xl:pl-44 flex items-center font-medium sm:font-bold text-blue-900 w-full`}
        >
          <img
            className="justify-self-bottom pinMobile md:pinDesktop"
            src={pin}
            alt="Unicorn pin"
          />
          <span className="w-10/12 text-center sm:text-justify">Let us train you for battle</span>
        </h2>
        <h3 className="mt-0 mb-12 text-blue-900 text-2xl sm:text-3xl pl-4 md:pl-16 lg:pl-32 2xl:pl-44 ">
          Whatever your mission, we the have resources to help <br></br>solve
          your software challenge.
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
            cardLink="/equip"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TrainForBattle;
