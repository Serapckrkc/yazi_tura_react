import React from "react";
import "./Coin.css";
import coinTura from "../../Assets/1-lira-tura.png";
import coinYazi from "../../Assets/1-lira-yazi.png";

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={coinTura}
          className={props.side === "yazi" ? "Coin-back" : "Coin-front"}
        />

        <img
          src={coinYazi}
          className={props.side === "yazi" ? "Coin-front" : "Coin-back"}
        />
      </div>
    </div>
  );
};

export default Coin;
