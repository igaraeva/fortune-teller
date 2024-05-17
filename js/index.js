function generateFortune(event) {
  event.preventDefault();

  new Typewriter("#fortune", {
    strings: "Your secret desire to completely change your life will manifest.",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let fortuneGeneratorElement = document.querySelector("#fortune-generator");
fortuneGeneratorElement.addEventListener("submit", generateFortune);
