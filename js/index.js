function showFortune(response) {
  new Typewriter("#fortune", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function generateFortune(event) {
  event.preventDefault();

  let dateOfBirth = document.querySelector("#date-of-birth");
  let prompt = `Generate a personal future prediction based on a person's date of birth: ${dateOfBirth.value}. The prediction should be short, one sentence long with NO headings or subheadings. You should avoid stating the current year. The user's date of birth (${dateOfBirth.value}) should have a full date (day, month, year), if not - prompt the user to input their date of birth in this format: DD/MM/YYYY`;
  let context =
    "You are an AI assistant who loves astrology, numerology and zodiac signs. You can give future predictions based on a person's date of birth";
  let apiKey = "51f9883450a0f1682ta31o8477291fb1";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fortuneElement = document.querySelector("#fortune");
  fortuneElement.classList.remove("hidden");
  axios.get(apiUrl).then(showFortune);
}

let fortuneGeneratorElement = document.querySelector("#fortune-generator");
fortuneGeneratorElement.addEventListener("submit", generateFortune);
