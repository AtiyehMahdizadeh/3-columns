import React from "react";
import Car from "./Car";
import './CarsContainer.css';

export default function CarsContainer(){
    return(
      <>
        <div className="cars_container">

            <Car 
              icon="./images/icon-sedans.svg"
              type="SEDAN"
              description="Choose a sedan for its affordability and excellent fuel economy.
                    Ideal for cruising in the city or on your next road trip."
              backgroundColor="#ffa500"
              border_top_left="10px"
              border_bottom_left="10px"
              btn_color="orange"
            />

            <Car 
              icon="./images/icon-suvs.svg"
              type="SUV"
              description="Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adbentures."
              backgroundColor="#257180"
              btn_color="#257180"
            />


            <Car 
              icon="./images/icon-luxury.svg"
              type="LUXURY"
              description="Cruise in the best car brands without the bloated prices.
              Enjoy the enhanced comfort of a luxury rental and arrive in style."
              backgroundColor="#16423C"
              border_top_right="10px"
              border_bottom_right="10px"
              btn_color="#16423C"
            />

        </div>

        <div className="signature">
            <p>Created by: <span style={{color:"#FF8383"}}>Atiyeh</span></p>
        </div>
      </>
    )
}