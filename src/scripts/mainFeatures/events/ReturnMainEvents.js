import { HealthEvent } from "./HealthEvent";
import { DisciplineEvent } from "./DisciplineEvent";
import { CleanEvent } from "./CleanEvent";
import {
  GameButton,
  PlayerChoiceOne,
  PlayerChoiceTwo,
} from "../game/GameEventListeners";
import { FoodEvent, MealEvent, SnackEvent } from "./FoodEvent";
import {
  healthButton,
  disciplineButton,
  cleanButton,
  gameButton,
  playerChoiceOne,
  playerChoiceTwo,
  foodButton,
  mealButton,
  snackButton,
  lightButton,
  lightsOn,
  lightsOff,
  healButton,
} from "../../tamaImports";
import { HealEvent } from "./HealEvent";
import { LightEvent, LightsOnAndOff } from "./LightsEvent";

function ReturnMainEvents(state) {
  ////////// FOOD
  foodButton.addEventListener("click", () => {
    FoodEvent(state);
  });

  mealButton.addEventListener("click", () => {
    MealEvent(state);
  });

  snackButton.addEventListener("click", () => {
    SnackEvent(state);
  });

  ////////// LIGHTS
  lightButton.addEventListener("click", () => {
    LightEvent(state);
  });

  lightsOn.addEventListener("click", () => {
    LightsOnAndOff(state, false);
  });

  lightsOff.addEventListener("click", function () {
    LightsOnAndOff(state, true);
  });

  ////////// GAMES
  gameButton.addEventListener("click", () => {
    GameButton(state);
  });

  playerChoiceOne.addEventListener("click", () => {
    PlayerChoiceOne(state);
  });

  playerChoiceTwo.addEventListener("click", () => {
    PlayerChoiceTwo(state);
  });

  ////////// HEALING
  healButton.addEventListener("click", function () {
    HealEvent(state);
  });

  ////////// CLEAN
  cleanButton.addEventListener("click", function () {
    CleanEvent(state);
  });

  ////////// HEALTH STATS
  healthButton.addEventListener("click", function () {
    HealthEvent(state);
  });

  ////////// DISCIPLINE
  disciplineButton.addEventListener("click", function () {
    DisciplineEvent(state);
  });
}

export { ReturnMainEvents };
