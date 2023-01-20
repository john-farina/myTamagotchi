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
} from "../../tamaImports";

function ReturnAllEvents(state) {
  mealButton.addEventListener("click", () => {
    MealEvent(state);
  });

  snackButton.addEventListener("click", () => {
    SnackEvent(state);
  });

  healthButton.addEventListener("click", function () {
    HealthEvent(state);
  });

  disciplineButton.addEventListener("click", function () {
    DisciplineEvent(state);
  });

  cleanButton.addEventListener("click", function () {
    CleanEvent(state);
  });

  gameButton.addEventListener("click", () => {
    GameButton(state);
  });

  playerChoiceOne.addEventListener("click", () => {
    PlayerChoiceOne(state);
  });

  playerChoiceTwo.addEventListener("click", () => {
    PlayerChoiceTwo(state);
  });
}

export { ReturnAllEvents };
