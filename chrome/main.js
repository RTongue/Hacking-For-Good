// <<<<<<< HEAD

// =======
// document.getElementById("mainButton").addEventListener("click", () => {
//   const wordToLookFor = document.getElementById("mainInput").value;
//   const wordReplacement = document.getElementById("secondInput").value;
//   let variables = `let firstWord = "${wordToLookFor}"; let secondWord = "${wordReplacement}";`;
// >>>>>>> 4353537cc466416018f5d4f6f7161c8d9e062101
//document.addEventListener("DOMContentLoaded", function() { 
  chrome.tabs.executeScript({
    file: "/assets/jquery-3.1.1.min.js"
  }, () => {
    chrome.tabs.executeScript({
      code: 'let var = variables',
    }, () => {
      chrome.tabs.executeScript({
        file: "/searchAndBlock.js"
      })
    })
  })
//}, true);
//alert("Hello from your Chrome extension!")
