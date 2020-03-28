import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./component/Info";
import Country from "./country/Country.js";

const App = () => {
  let [tempSymbol, setTempSymbol] = useState("F");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=54323f7a8380df9035ba638321773c13"
      );
      const data = await response.json();
      setCities(data.list);
    })();
  }, []);
  return (
    <div>
      <main>
        <Info
          tempSymbol={tempSymbol}
          setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
        />
        <Country cities={cities[0]} tempSymbol={tempSymbol} />
        <Country cities={cities[1]} tempSymbol={tempSymbol} />
      </main>
    </div>
  );
};

export default App;
