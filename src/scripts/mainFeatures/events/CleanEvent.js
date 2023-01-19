import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { clean } from "../mainFunctions";
import { cleaningLine } from "../../tamaImports";
import { showImage, hideImage } from "../../animations/MovmentAnimation";

function CleanEvent(state) {
  hideAllExtraScreens(state);
  if (state.tamaPoop > 0) {
    clean(state);
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
      state.tamaIsHappy = true;
    }, 800);
  } else {
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
    }, 800);
  }
}

export { CleanEvent };
