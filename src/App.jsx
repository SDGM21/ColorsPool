import { useEffect, useState } from "react";
import getColorRandomizer from "./helpers/getColorRandomizer";

const App = () => {
  const [bgColor, setBgColor] = useState({
    red: 0,
    blue: 0,
    green: 0,
    alpha: 0,
  });

  async function handleClick(e) {
    if (document.body.classList.contains("Random")) {
      document.body.classList.remove("Random");
    }
    let colors = await getColorRandomizer(3);
    setBgColor({ ...colors });
  }

  function poolerColor(e) {
    document.body.classList.add("Random");
  }

  useEffect(() => {
    let { red, blue, green, alpha } = bgColor;
    document.body.style.backgroundColor = `rgba(${red},${blue},${green},${alpha})`;
  }, [{ ...bgColor }]);

  return (
    <>
      <div className="border-box bg-gray-200 mx-auto my-auto p-4 rounded-xl">
        <div>
          <h1 className="sm:text-4xl lg:text-8xl xl:text-12xl font-extrabold">
            Color Pool
          </h1>
          <h2>
            Actual Background: RED({bgColor.red}) - BLUE({bgColor.blue}) -
            GREEN({bgColor.green}) - ALPHA({bgColor.alpha})
          </h2>
        </div>
        <div id="buttonsArea" className="flex justify-center text-white">
          <button
            onClick={handleClick}
            className="w-1/2 border-transparent bg-gray-500 m-2 p-2 rounded-2xl hover:bg-black hover:transition-all hover:rounded-lg"
          >
            Change Actual Color
          </button>
          <button
            onClick={poolerColor}
            className="w-1/2 border-transparent bg-gray-500 m-2 p-2 rounded-2xl  hover:bg-black hover:transition-all hover:rounded-lg"
          >
            Pooler
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
