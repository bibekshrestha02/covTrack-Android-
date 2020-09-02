const initailState = {
  primaryColor: "#E0E2DA",
  secondaryColor: "white",
  textColor: "black",
};

export default color = (state = initailState, action) => {
  switch (action.type) {
    case "color1":
      return {
        primaryColor: "#DAE0E2",
        secondaryColor: "white",
        textColor: "black",
      };
      break;
    case "color2":
      return {
        primaryColor: "#2D2B55",
        secondaryColor: "#32305F",
        textColor: "white",
      };
      break;
    case "color3":
      return {
        primaryColor: "#30243D",
        secondaryColor: "#382A47",
        textColor: "white",
      };
      break;
    case "color4":
      return {
        primaryColor: "#193549",
        secondaryColor: "#1D3D54",
        textColor: "white",
      };
      break;

    default:
      return state;

      break;
  }
};
