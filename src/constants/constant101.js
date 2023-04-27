export const ACTIONS = {
  INCREMENT: "incriment",
  DECRIMENT: "decriment",
};

export const LANGUAGE_LIST = {
  ENGLISH: "ENGLISH",
  AMHARIC: "AMHARIC",
};

export const LANGUAGE = {
  ENGLISH: {
    LANGUAGESElECTOR: "Languge:",
    NAVMENU: [
      { path: "/", title: "Home" },
      { path: "/services", title: "Service" },
      { path: "/projects", title: "Projects" },
      { path: "/contact", title: "Contact" },
      { path: "/about", title: "About" },
    ],
    SECTIONS: ["Hero", "Service", "Content", "About", "Footer"],
  },
  AMHARIC: {
    LANGUAGESElECTOR: "ቃንቃ:",
    NAVMENU: [
      { path: "/", title: "ሆም" },
      { path: "/services", title: "አገልግሎት" },
      { path: "/projects", title: "ፕሮገክት" },
      { path: "/about", title: "ሰለኛ" },
    ],
    SECTIONS: ["ሂሮ", "አገልግሎት", "ገኑኝነት", "ሰለኛ", "ፉተር"],
  },
};
