import React from "react";

export default function Card(props) {
  return (
    <div className="card-panel">
      <main className="card" id="card">
        <div className="card-back">
          <div className="card-cat">
            <div className="card-info">
              <span className="first-span">Сказочное заморское явство</span>
              <header>
                <h1>Нямушка</h1>
                <h3>с {props.title2}</h3>
              </header>
              <main>
                <div>
                  <span>
                    <strong>{props.num}</strong> порций
                  </span>
                </div>
                <div>
                  <span className="second-span">{props.addition}</span>
                </div>
                <div>
                  <span className="second-span">{props.agree}</span>
                </div>
              </main>
              <div className="circle">
                <div className="circle-text">
                  <span className="m-c-t">{props.weight}</span>
                  <span className="d-c-t">кг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="card-footer">
        {props.footer} <a href="#">{props.link}</a>
      </footer>
    </div>
  );
}
