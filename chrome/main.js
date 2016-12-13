console.log('RUNNING!!!');
var wordDictionary;

chrome.storage.sync.get('wordDictionary', function (obj) {
  console.log(obj);
  wordDictionary = obj.wordDictionary;
  if (!wordDictionary) {
    chrome.storage.sync.set({'wordDictionary': {}}, function() {
      console.log('Initialized');
    });
  } else {
    for (var key in wordDictionary) {
      if (wordDictionary.hasOwnProperty(key)) {
        var value = wordDictionary[key];
        $('ul').append(`<li>${key} replaced with: ${value}.`);
      }
    }
  }
  execute('wordDictionary = ' + JSON.stringify(wordDictionary) + ';')
});

function execute (variables) {
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
}


function saveChanges(word, replacement) {
  chrome.storage.sync.get('wordDictionary', function (obj) {
    console.log(obj);
    wordDictionary = obj.wordDictionary
    wordDictionary[word] = replacement;
    chrome.storage.sync.set({'wordDictionary': wordDictionary}, function() {
      // Notify that we saved.
      console.log('Settings saved');
      $("ul").append("<li>" + word + "</li>");
      // Put the saved words into and unordered list
      execute('wordDictionary = ' + JSON.stringify(wordDictionary) + ';' );
    });
  });
  // Get a value saved in a form.
  // Check that there's some code there.
  // Save it using the Chrome extension storage API.

}

document.getElementById("mainButton").addEventListener("click", (event) => {

  const wordToLookFor = document.getElementById("mainInput").value;
  const wordReplacement = document.getElementById("secondInput").value;
  let variables = `let firstWord = "${wordToLookFor}"; let secondWord = "${wordReplacement}";`;
  saveChanges(wordToLookFor, wordReplacement);


})
