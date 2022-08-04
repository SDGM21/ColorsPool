import { useRef } from "react";

const useMultiplerRef = (refAmount) => {
  const objList = {};

  for (let index = 0; index < refAmount; index++) {
    let name = `ref_${index + 1}`;

    Object.assign(objList, {
      [name]: [
        () => {
          useRef(null);
        },
      ],
    });
  }
  console.log(objList);
  return objList;
};

export default useMultiplerRef;
