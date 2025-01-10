import React from "react";
import './CarsContainer.css';

export default function Car({icon,type,description,
                            backgroundColor,border_top_left,border_bottom_left,
                            border_top_right,
                            border_bottom_right,
                            btn_color}){
    return(

        <div className="car_intro" 
          style={{backgroundColor:backgroundColor,
                  borderTopLeftRadius:border_top_left, 
                  borderBottomLeftRadius:border_bottom_left,
                  borderTopRightRadius:border_top_right,
                  borderBottomRightRadius:border_bottom_right}}>
            <img className="car_profile" src={icon} alt={`${type} icon`}/>
            <div className="name_type_car">
                <h1 className="car_type">{type}</h1>
                <p className="car_type_Description">
                    {description}
                </p>
            </div>
            
            <button style={{color:btn_color}} className="btn">learn more</button>
            
        </div>
    )
}