import PropTypes from "prop-types";

const getColorRandomizer = (objAmount) => {
  const objList = { red:0, blue:0, green:0, alpha: 1 };

  for (let index = 0; index < objAmount; index++) {
    let addColor = Math.floor(Math.random() * 255);
    switch (index) {
      case 0:
        objList.red = addColor;
        break;
      case 1:
        objList.blue = addColor;
        break;
      case 2:
        objList.green = addColor;
        break;
      case 3:
        objList.alpha = Math.random();
        break;
    }
  }
  return objList;
};

getColorRandomizer.PropTypes = {
  objAmount: PropTypes.number.isRequired,
};

getColorRandomizer.propDefault = {
  objAmount: 1,
};

export default getColorRandomizer;
