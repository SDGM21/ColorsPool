import { useEffect, useState } from "react";
import getColorRandomizer from "./helpers/getColorRandomizer";

const App = () => {
  const [colorsGroup, setColorsGroup] = useState([0, 0, 0]);

  const handleClick = () => {
    getColorRandomizer(3).then((elements) => setColorsGroup(elements));
    document.getElementById(
      "colorScreen"
    ).style.backgroundColor = `rgb(${colorsGroup[0]},${colorsGroup[1]},${colorsGroup[2]})`;
  };

  return (
    <>
      <div
        className="flex content-center justify-center absolute z-0 w-full h-full transition-colors"
        id="colorScreen"
      >
        <div className="mx-auto my-auto bg-gray-100 rounded-xl box-border">
          <div className="p-2">
            <h1 className="text-9xl font-extrabold hover:text-cyan-500">
              Color Pool
            </h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-colors"
            >
              Randomize Color:{" "}
              <span>{`${colorsGroup.map((element) => {
                return `${[element]}`;
              })}`}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
