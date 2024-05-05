const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrase = document.querySelector("#phrase");
const btnOpenCookie = document.querySelector("#btnOpenCookie");
const btnRestart = document.querySelector("#btnRestart");

const phrases = [
  'A sabedoria está em aprender com o passado para construir um futuro melhor.',
  'A vida é uma jornada, aproveite cada passo do caminho.',
  'Seja a mudança que você deseja ver no mundo.',
  'A persistência é o caminho do êxito.',
  'A beleza está nos olhos de quem vê, mas a verdadeira essência está no coração.',
  'Acredite em si mesmo e tudo será possível.',
  'O segredo da felicidade está em encontrar alegria nas pequenas coisas.',
  'A paciência é uma virtude que leva a grandes recompensas.',
  'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
  'A amizade é como uma flor, precisa ser cultivada para florescer.',
  'Aprenda com o ontem, viva para o hoje, sonhe com o amanhã.',
  'A verdadeira riqueza está na bondade que compartilhamos.',
  'Seja gentil, pois cada pessoa que você encontra está travando uma grande batalha.',
  'O sorriso é a chave que abre muitas portas.',
  'A gratidão transforma o que temos em suficiente.',
  'O amor é a linguagem que todos entendem.',
  'O maior obstáculo para o sucesso é o medo do fracasso.',
  'A criatividade é a inteligência se divertindo.',
  'A vida é como andar de bicicleta, para manter o equilíbrio, é preciso continuar em movimento.',
  'Cada novo dia é uma página em branco, escreva uma boa história.'
];

btnOpenCookie.addEventListener("click", openCookie);
btnRestart.addEventListener("click", toggleScreen);
document.addEventListener("keydown", restartOnKeyPress);

function openCookie() {
  toggleScreen();
  changePhrase();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function changePhrase() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.textContent = randomPhrase;
}

function restartOnKeyPress(event) {
  if (event.key === "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}

