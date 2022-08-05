import { useEffect, useState } from "react";
import getColorRandomizer from "./helpers/getColorRandomizer";
import OptionsView from "./components/OptionsView";
import ColorScreen from "./components/ColorScreen";

const App = () => {
  const [colorsGroup, setColorsGroup] = useState(null);
  const [option, setOption] = useState(null);
  let timer = 5000;
  let timerId = 0;

  const colorChanger = async () => {
    const colors = await getColorRandomizer(4);
    setColorsGroup(colors);
  };

  const timerColorChanger = () => {
    timerId = setInterval(colorChanger, timer);
  };

  switch (option) {
    case "randomizeButton":
      timerColorChanger();
      clearInterval(timerId);
      break;
    case "changerButton":
      colorChanger();
      setOption(null);
      break;
    case "sinButton":
      console.log("clicked");
      break;
  }

  return (
    <>
      <ColorScreen red={colorsGroup ? colorsGroup[0] : 255} blue={colorsGroup ? colorsGroup[1] : 255} green={colorsGroup ? colorsGroup[2] : 255} alpha={1}>
        <div className="w-auto mx-auto my-auto bg-gray-300 rounded-xl box-border p-2">
          <div className="w-auto p-2">
            <h1 className="text-9xl font-extrabold hover:text-cyan-500">
              Color Pool
            </h1>
          </div>
          <div className="flex justify-around">
            <button
              onClick={(e) => setOption(e.target.id)}
              className="bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-colors"
              id="randomizeButton"
            >
              Randomize Colors
            </button>
            <button
              onClick={(e) => setOption(e.target.id)}
              className="bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-colors"
              id="changerButton"
            >
              Button Changer
            </button>
            <button
              onClick={(e) => setOption(e.target.id)}
              className="bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-colors"
              id="sinButton"
            >
              Sin(Function)
            </button>
          </div>
          {option === "sinButton" && <OptionsView />}
        </div>
      </ColorScreen>
    </>
  );
};

export default App;
