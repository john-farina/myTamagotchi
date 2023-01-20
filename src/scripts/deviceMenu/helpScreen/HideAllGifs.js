import { displayHide } from "../../misc/usefulFunctions";
import {
  foodGif,
  lightsGif,
  gameGif,
  sickGif,
  poopGif,
  healthGif,
} from "../../tamaImports";

export function hideAllGifs() {
  displayHide(foodGif);
  displayHide(lightsGif);
  displayHide(gameGif);
  displayHide(sickGif);
  displayHide(poopGif);
  displayHide(healthGif);
}
