import {
  helpMenuButton,
  helpEat,
  foodGif,
  helpLights,
  lightsGif,
  helpGame,
  gameGif,
  helpSick,
  sickGif,
  helpClean,
  poopGif,
  helpHealth,
  healthGif,
} from "../../tamaImports";
import { HelpEvent } from "./HelpEvent";
import { hideAllGifs } from "./HideAllGifs";
import { displayFlex } from "../../misc/usefulFunctions";

export function ReturnHelpEventListeners(state) {
  helpMenuButton.addEventListener("click", function () {
    HelpEvent(state);
  });

  helpEat.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(foodGif);
  });

  helpLights.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(lightsGif);
  });

  helpGame.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(gameGif);
  });

  helpSick.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(sickGif);
  });

  helpClean.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(poopGif);
  });

  helpHealth.addEventListener("click", function () {
    hideAllGifs();

    displayFlex(healthGif);
  });
}
