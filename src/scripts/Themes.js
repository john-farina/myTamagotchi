import {
  tamagotchiContainer,
  dropDownMenu,
  button1,
  button2,
  button3,
  menuButton,
  planetExpressLogo,
  alfLogo,
} from "./tamaImports";
import { displayFlex, displayHide } from "./usefulFunctions";
const body = document.querySelector("body");

function autoTheme(background, tamagotchi, button, buttonBorder) {
  body.style.backgroundColor = background;
  body.style.background = background;
  tamagotchiContainer.style.backgroundColor = tamagotchi;
  tamagotchiContainer.style.background = tamagotchi;
  dropDownMenu.style.backgroundColor = tamagotchi;
  dropDownMenu.style.background = tamagotchi;

  button1.style.backgroundColor = button;
  button2.style.backgroundColor = button;
  button3.style.backgroundColor = button;
  menuButton.style.backgroundColor = button;

  button1.style.borderColor = buttonBorder;
  button2.style.borderColor = buttonBorder;
  button3.style.borderColor = buttonBorder;
  menuButton.style.borderColor = buttonBorder;
}

function updateTheme(state) {
  if (state.tamaTheme === 0) {
    displayFlex(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--greenBackground)",
      "var(--mintGreen)",
      "var(--redButton)",
      "var(--darkerRedButton)"
    );
  } else if (state.tamaTheme === 1) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--yellowBackground)",
      "var(--lightYellow)",
      "var(--purpleButton)",
      "var(--darkerPurpleButton)"
    );
  } else if (state.tamaTheme === 2) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--whiteBackground)",
      "var(--offWhite)",
      "var(--blackButton)",
      "var(--darkerBlackButton)"
    );
    dropDownMenu.style.backgroundColor = "var(--offWhiteMenu)";
  } else if (state.tamaTheme === 3) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--blueBackground)",
      "var(--myBlueAndRed)",
      "var(--blackButton)",
      "var(--darkerBlackButton)"
    );
  } else if (state.tamaTheme === 4) {
    displayHide(planetExpressLogo);
    displayFlex(alfLogo);
    autoTheme(
      "var(--alfBackground)",
      "var(--alf)",
      "var(--alfButton)",
      "var(--darkerAlfButton)"
    );
  }
}

export { updateTheme };
