import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="nosubmit ">
        <input
          type="search"
          placeholder="Search..."
          className="nosubmit"
          autocomplete="off"
        />
      </form>
      <div className="row">
          <div className="col-6">
        <div className="weather-condition active">
            <h1>
              <span className="temperature"> 5 </span>°
              <a href="/" className="celsius">
                C
              </a>
              |°
              <a href="/" className="fahrenheit">
                F
              </a>
            </h1>
            <h2>
              <span>10</span>° / <span>13</span>°
            </h2>
          </div>
        </div>
          <div className="col-6">
        <div className="icon-icon ">
            <img
              className="icon"
              id="icon"
              alt="Mostly cloudy"
              src="http://openweathermap.org/img/wn/04d@2x.png"
            />
          </div>
          <div className="weather-description">clear</div>
        </div>
      </div>
      <div className="row">
        <span className="location text-center">
          <span className="city"> Tehran</span> ,
          <span className="country"> Iran </span>
        </span>
      </div>
      <div className="row upadting">
        <p>Updated 6:30 AM</p>
      </div>
      <div className="forcast-weather">
        <div className="source-code">
          <a href="https://github.com/bahar-b/" target="-blank" class="link" >
            Open-source code
          </a>
          by Bahar
        </div>
      </div>
    </div>
  );
}
