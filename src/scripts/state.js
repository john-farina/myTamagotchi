let tamaState = [
  "Egg", //0
  "Child_1", //1
  "Child_2", //2
  "Teen_1", //3 (for Child_1)
  "Teen_2", //4 (for Child_2)
  "Secret_Adult", //5 (for Teen_1 (small chance of getting))
  "Secret_Adult_2", //6 (for Teen_2 (small chance of getting)))
  "Adult_1", //7 (for Teen_1 && Teen_2) (healthy and good care)
  "Adult_2", //8 (for Teen_1 && Teen_2) (healthy)
  "Adult_3", //9 (for Teen_1 && Teen_2) (healthy)
  "Adult_4", //10 (for Teen_1 && Teen_2) (sick and unhealthy)
  "Secret_Adult_Evolve", //11 (ONLY for Secret_Adult_2)
  "12",
  "Dead",
];
let state = {
  gameStarted: false,
  tamaTheme: 3,
  tamaName: "Larry",
  tamaAge: 8,
  tamaHatch: 2,
  tamaStage: tamaState,
  tamaDead: false,
  tamaHealth: 3,
  tamaHappy: 4,
  tamaIsHappy: false,
  tamaIsMad: false,
  needAttention: false,
  tamaDiscipline: 0,
  tamaSpoiled: 0,
  tamaNeglect: 0,
  tamaPoop: 0,
  tamaSick: false,
  animationCount: 0,
  lightIsOff: false,
  foodAnimationGoing: false,
  timeState: {
    gameStart: new Date(),
    lastHatchCycle: new Date(),
    lastInteract: new Date(),
    lastEvolve: new Date(),
    lastPoop: new Date(),
    lastSick: new Date(),
    lastHealth: new Date(),
    lastHappy: new Date(),
    lastComplain: new Date(),
    lastAnimation: new Date(),
  },
  gameState: {
    gameRound: 0,
  },
};

export { state, tamaState };
