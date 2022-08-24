import { useEffect, useState } from "react";
import getColorRandomizer from "./helpers/getColorRandomizer";

const App = () => {
  const [activated, setActivated] = useState(false);
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
    document.body.classList.toggle("Random");
    setActivated(!activated);
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
            {activated && (
              <svg
                className="animate-spin h-5 w-5 mr-3 inline-flex"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
                  fill="currentColor"
                />{" "}
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="currentColor"
                />{" "}
              </svg>
            )}
            Pooler: {activated.toString()}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
