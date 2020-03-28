import React from "react";
import bg from "../img/bg-shape.svg";
import "./info/info.css";

const Info = props => {
  return (
    <div>
      <section>
        <img src={bg} alt="Background Shape" id="bg" />
        <h1>
          WEATHER <br />
          ME <span>NOW</span>
        </h1>
        <hr />
        <p>
          A minimal weather app design to brighten up your day. <br /> Designed
          and developed by Emon Hossain @ NIE Media.
        </p>
        <div className="bottom">
          <div className="buttons">
            <div className="btn">
              {props.tempSymbol === "C" ? (
                <button className="clicked">C</button>
              ) : (
                <button onClick={props.setTempSymbol}>C</button>
              )}
              <p>Celsius</p>
            </div>
            <div className="btn">
              {props.tempSymbol === "F" ? (
                <button className="clicked">F</button>
              ) : (
                <button onClick={props.setTempSymbol}>F</button>
              )}
              <p>Fahrenhiet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
