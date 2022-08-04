import PropTypes from "prop-types";

const getColorRandomizer = async (objAmount) => {
  const objList = [];

  for (let index = 0; index < objAmount; index++) {
    objList.push(Math.floor(Math.random() * 255));
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
