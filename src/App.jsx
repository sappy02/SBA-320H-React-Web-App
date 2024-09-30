import { useEffect, useState } from "react";
import "./App.css";
import Grandmother from "./components/Grandmother";

import Inlaws from "./components/Inlaws";

function App() {
  // Hook_Lympics: Use (3/4)hooks
  // 1. useState == {{storing/managing data}}
  const [recipe, setRecipe] = useState("BaconEggNChz");
  const [relatives, setRelatives] = useState([]);
  // ----(v),---setFunc()--------initialVal

  const getData = async () => {
    await fetch("https://jsonplaceholder.org/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        // console.log(users);
        setRelatives(users);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  // 2.useEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grandmother inheritance={recipe} permissionToChange={setRecipe} />

      {relatives.map((fam, i) => {
        return (
          <div key={i}>
            <Inlaws fam_id={fam} />
          </div>
        );
      })}
    </>
  );
}

export default App;
