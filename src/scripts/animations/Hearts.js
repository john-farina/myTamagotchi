import {
  heart1,
  heart2,
  heart3,
  heart4,
  heart5,
  happy1,
  happy2,
  happy3,
  happy4,
  happy5,
  discipline1,
  discipline2,
  discipline3,
  discipline4,
  discipline5,
} from "../tamaImports";

let emptyHeart = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
let halfHeart = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
let fullHeart = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
let emptyDiscipline =
  "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
let fullDiscipline =
  "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";

function updateHeartSvg(state) {
  if (state.tamaHealth === 0) {
    heart1.src = emptyHeart;
    heart2.src = emptyHeart;
    heart3.src = emptyHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 0.5) {
    heart1.src = halfHeart;
    heart2.src = emptyHeart;
    heart3.src = emptyHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 1) {
    heart1.src = fullHeart;
    heart2.src = emptyHeart;
    heart3.src = emptyHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 1.5) {
    heart1.src = fullHeart;
    heart2.src = halfHeart;
    heart3.src = emptyHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 2) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = emptyHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 2.5) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = halfHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 3) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = fullHeart;
    heart4.src = emptyHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 3.5) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = fullHeart;
    heart4.src = halfHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 4) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = fullHeart;
    heart4.src = fullHeart;
    heart5.src = emptyHeart;
  }

  if (state.tamaHealth === 4.5) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = fullHeart;
    heart4.src = fullHeart;
    heart5.src = halfHeart;
  }

  if (state.tamaHealth === 5) {
    heart1.src = fullHeart;
    heart2.src = fullHeart;
    heart3.src = fullHeart;
    heart4.src = fullHeart;
    heart5.src = fullHeart;
  }

  // happy meter

  if (state.tamaHappy === 0) {
    happy1.src = emptyHeart;
    happy2.src = emptyHeart;
    happy3.src = emptyHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 0.5) {
    happy1.src = halfHeart;
    happy2.src = emptyHeart;
    happy3.src = emptyHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 1) {
    happy1.src = fullHeart;
    happy2.src = emptyHeart;
    happy3.src = emptyHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 1.5) {
    happy1.src = emptyHeart;
    happy2.src = halfHeart;
    happy3.src = emptyHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 2) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = emptyHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 2.5) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = halfHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 3) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = fullHeart;
    happy4.src = emptyHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 3.5) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = fullHeart;
    happy4.src = halfHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 4) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = fullHeart;
    happy4.src = fullHeart;
    happy5.src = emptyHeart;
  }

  if (state.tamaHappy === 4.5) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = fullHeart;
    happy4.src = fullHeart;
    happy5.src = halfHeart;
  }

  if (state.tamaHappy === 5) {
    happy1.src = fullHeart;
    happy2.src = fullHeart;
    happy3.src = fullHeart;
    happy4.src = fullHeart;
    happy5.src = fullHeart;
  }
}

function updateDisciplineSvg(state) {
  if (state.tamaDiscipline === 0) {
    discipline1.src = emptyDiscipline;
    discipline2.src = emptyDiscipline;
    discipline3.src = emptyDiscipline;
    discipline4.src = emptyDiscipline;
    discipline5.src = emptyDiscipline;

    return;
  }

  if (state.tamaDiscipline === 1) {
    discipline1.classList.add("full");
    discipline1.src = fullDiscipline;
    discipline2.src = emptyDiscipline;
    discipline3.src = emptyDiscipline;
    discipline4.src = emptyDiscipline;
    discipline5.src = emptyDiscipline;

    return;
  }

  if (state.tamaDiscipline === 2) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");

    discipline1.src = fullDiscipline;
    discipline2.src = fullDiscipline;
    discipline3.src = emptyDiscipline;
    discipline4.src = emptyDiscipline;
    discipline5.src = emptyDiscipline;

    return;
  }
  if (state.tamaDiscipline === 3) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");

    discipline1.src = fullDiscipline;
    discipline2.src = fullDiscipline;
    discipline3.src = fullDiscipline;
    discipline4.src = emptyDiscipline;
    discipline5.src = emptyDiscipline;

    return;
  }

  if (state.tamaDiscipline === 4) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");
    discipline4.classList.add("full");

    discipline1.src = fullDiscipline;
    discipline2.src = fullDiscipline;
    discipline3.src = fullDiscipline;
    discipline4.src = fullDiscipline;
    discipline5.src = emptyDiscipline;

    return;
  }

  if (state.tamaDiscipline === 5) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");
    discipline4.classList.add("full");
    discipline5.classList.add("full");

    discipline1.src = fullDiscipline;
    discipline2.src = fullDiscipline;
    discipline3.src = fullDiscipline;
    discipline4.src = fullDiscipline;
    discipline5.src = fullDiscipline;

    return;
  }
}

export { updateHeartSvg, updateDisciplineSvg };
