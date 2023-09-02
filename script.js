const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  // console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <div class="word">
          <h3>${inpWord}</h3>
          <button on click="playSound()">
            <i class="fa-solid fa-volume-high"></i> 
          </button>
        </div>
        <div class="detalis">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic || ""}</p>
        </div>
        <p class="word-meaning">${
          data[0].meanings[0].definitions[0].definition
        }</p>
        <p class="world-example">${
          data[0].meanings[0].definitions[0].example || ""
        } </p>`;

      sound.setAttribute("src", `${data[0].phonetics[0].url}`);
      // const firstAudioUrl = data[0].phonetics[0].audio;
      let voice = sound.src;
    });
});

// function playSound(sound) {
//   const audio = new Audio(sound);
//   audio.play();
// }


// if (firstAudioUrl) {
//   playAudio(firstAudioUrl);
// }

function playSound() {
  sound.play();
}
