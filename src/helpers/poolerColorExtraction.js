import getColorRandomizer from "./getColorRandomizer";

const poolerColorExtraction = ({ option }) => {
  if (option === 1) {
    let colorsGroup = [];
    // let randValues = new Uint8Array(1);
    // console.log(window.crypto.getRandomValues(randValues))
    for (let index = 0; index < Math.floor(Math.random() * 5) + 2; index++) {
      let { red, blue, green, alpha } = getColorRandomizer(3);
      colorsGroup.push(`rgba(${red}, ${blue}, ${green}, ${alpha})`);
    }
    return `background: linear-gradient(90deg, ${colorsGroup.toString()}); background-size: 400% 400%;`;
  } else {
    let { red, blue, green } = getColorRandomizer(3);
    return `background-color: rgb(${red}, ${blue}, ${green})`;
  }
};

export default poolerColorExtraction;
