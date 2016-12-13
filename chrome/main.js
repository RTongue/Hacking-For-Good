

document.getElementById("mainButton").addEventListener("click", () => {
  console.log("Just Clicked!");
  chrome.tabs.executeScript({
    file: "/assets/jquery-3.1.1.min.js"
  }, () => {
    chrome.tabs.executeScript({
      code: "let testVar = 1",
    }, () => {
      chrome.tabs.executeScript({
        file: "/searchAndBlock.js"
      })
    })
  })
})
