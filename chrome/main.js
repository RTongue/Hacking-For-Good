const mainInput = document.getElementById("mainInput");
const secondInput = document.getElementById("secondInput");

mainInput.addEventListener("focus", () => {
  mainInput.placeholder = "";
})

mainInput.addEventListener("blur", () => {
  mainInput.placeholder = mainInput.value || "Word To Replace";
})

secondInput.addEventListener("focus", () => {
  secondInput.placeholder = "";
})

secondInput.addEventListener("blur", () => {
  secondInput.placeholder = secondInput.value || "Replacement Word";
})

document.getElementById("mainButton").addEventListener("click", () => {
  const wordToLookFor = document.getElementById("mainInput").value;
  const wordReplacement = document.getElementById("secondInput").value;
  let variables = `let firstWord = "${wordToLookFor}"; let secondWord = "${wordReplacement}";`;
  chrome.tabs.executeScript({
    file: "/assets/jquery-3.1.1.min.js"
  }, () => {
    chrome.tabs.executeScript({
      code: variables,
    }, () => {
      chrome.tabs.executeScript({
        file: "/searchAndBlock.js"
      })
    })
  })
})
