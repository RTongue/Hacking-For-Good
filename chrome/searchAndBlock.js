function getNodesThatContain(text) {
    var textNodes = $(document).find(":not(iframe, script)")
      .contents().filter(
          function() {
           return this.nodeType == 3
             && this.textContent.indexOf(text) > -1;
    });
    return Array.prototype.slice.call(textNodes.parent());
}

function replaceWord(wordToLookFor, wordReplacement) {
  var badNodes = getNodesThatContain(wordToLookFor);
  badNodes.map($)
  .forEach(node => {
    node[0].innerHTML = node[0].innerHTML.replace(wordToLookFor, '<span style="color: red">' + wordReplacement + '</span>');
  })
};

replaceWord('the', 'CHEESE')
