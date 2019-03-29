describe("singleplayer", function() {
  var mysinglePlayer;
  

  beforeEach(function() {
    mysinglePlayer = new singleplayer();
    
  });

  it("number of blancks should be equal to the word length", function() {
    //var num = singlePlayer.arrayOfAlpha.length;
	//expect(num.toEqual(singlePlayer.wordsLength));
	var myWords = mysinglePlayer.newWords();
	expect(myWords.toEqual("glossy"));

  });