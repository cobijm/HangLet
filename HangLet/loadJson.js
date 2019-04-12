var word = "";
var url ="https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=fd6342d48c0ea02a860090c4887045cec2339291b5e3dfb9d";

function setup() {
  loadJSON(url, gotData);
}

function gotData(data) {
  
}

