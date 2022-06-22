import React from "react";
import Card from "./Card";

export default function CardPackage() {
  let disabledFlag = false;

  function makeDisabled() {
    let x = document.getElementById("disabled");
    let txt = document.querySelector("div.disabled div.card-panel footer");
    let cardColor = document.querySelector(
      "div #disabled div.card-panel main.card"
    );
    let circle = document.querySelector(
      "div.disabled div main div div div div.circle"
    );
    if (disabledFlag === false) {
      disabledFlag = true;
      x.style.opacity = "0.8";
      txt.style.color = "yellow";
      circle.style.background = "#B3B3B3";
      cardColor.style.background =
        "linear-gradient(135deg, transparent 43px, #B3B3B3 0)";
    } else {
      x.style.opacity = "1";
      txt.style.color = "white";
      cardColor.style.background =
        "linear-gradient(135deg, transparent 43px, #2EA8E6 0)";
      circle.style.background = "#2EA8E6";
      disabledFlag = false;
    }
  }

  let flag = false;

  function changeColor1() {
    let card1 = document.querySelector("div #card-1 div.card-panel main.card");
    let circle = document.querySelector(
      "div #card-1 div main div div div div.circle"
    );

    if (flag === false) {
      flag = true;
      card1.style.background =
        "linear-gradient(135deg, transparent 43px, #D91667 0)";
      circle.style.background = "#D91667";
    } else {
      card1.style.background =
        "linear-gradient(135deg, transparent 43px, #2EA8E6 0)";
      circle.style.background = "#2EA8E6";
      flag = false;
    }
  }

  function changeColor2() {
    let card2 = document.querySelector("div #card-2 div.card-panel main.card");
    let circle = document.querySelector(
      "div #card-2 div main div div div div.circle"
    );

    if (flag === false) {
      flag = true;

      card2.style.background =
        "linear-gradient(135deg, transparent 43px, #D91667 0)";
      circle.style.background = "#D91667";
    } else {
      card2.style.background =
        "linear-gradient(135deg, transparent 43px, #2EA8E6 0)";
      circle.style.background = "#2EA8E6";
      flag = false;
    }
  }

  return (
    <div className="card-package">
      <div className="able-card" id="card-1" onClick={changeColor1}>
        <Card
          title2="фуа-гра"
          num="10"
          addition="мышь в подарок"
          agree=""
          footer="Чего сидишь? Порадуй котэ, "
          link="купи."
          weight="0,5"
        />
      </div>

      <div className="able-card" id="card-2" onClick={changeColor2}>
        <Card
          title2="рыбой"
          num="40"
          addition="2 мыши в подарок"
          agree=""
          footer="Головы щучьи с чесноком да свежайшая семгушка."
          weight="2"
        />
      </div>

      <div className="disabled" id="disabled" onClick={makeDisabled}>
        <Card
          title2="курой"
          num="100"
          addition="5 мышей в подарок"
          agree="заказчик доволен"
          footer="Печалька, с курой закончился."
          weight="5"
        />
      </div>
    </div>
  );
}
