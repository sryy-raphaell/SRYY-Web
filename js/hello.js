const helloTexts = [
  "Hello World",
  "Halo Dunia",
  "こんにちは世界",
  "Bonjour le monde",
  "Hola Mundo",
];

let i = 0;

setInterval(() => {
  i++;
  if (i >= helloTexts.length) i = 0;
  document.getElementById("helloText").textContent = helloTexts[i];
}, 3000);
