function getNodesThatContain(text) {
    var textNodes = $(document).find(":not(iframe, script)")
      .contents().filter(
          function() {
           return this.nodeType == 3
             && this.textContent.indexOf(text) > -1;
    });
    return Array.prototype.slice.call(textNodes.parent());
}

// function makeJQueryObject(ele) {
//   return $(ele);
// }

function replaceWord(wordToLookFor, wordReplacement) {
  console.log("success!");
  //get all matching nodes
  var badNodes = getNodesThatContain(wordToLookFor);
  console.log("BAD NODES: ", badNodes);
  //make them jquery objects
  badNodes.map($)
  //set all of their css to visibility hidden
  // badNodes.forEach(node => node.css('visibility', 'hidden'))
  .forEach(node => {
    // console.log(node);
    node[0].innerHTML = node[0].innerHTML.replace(wordToLookFor, '<span style="color: red">' + wordReplacement + '</span>');
  })
  console.log("Finished running!");
};

console.log("TESTVAR: ", testVar)
replaceWord("the", "TEST")
