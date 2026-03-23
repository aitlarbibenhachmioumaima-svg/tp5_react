import { useState } from "react";
import ChampTemperature from "./ChampTemperature";

function ConvertisseurTemp() {
  const [temp, setTemp] = useState("");

  return (
    <div>
      <ChampTemperature valeur={temp} onChangeTemp={setTemp} />

      <p>
        {temp !== ""
          ? `Température actuelle : ${temp} °C`
          : "Aucune valeur saisie"}
      </p>
    </div>
  );
}

export default ConvertisseurTemp;