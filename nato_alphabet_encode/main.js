const offset = 97; //UTF-8 ASCII offset of lowercase letters
const NATO = ["Alpha", "Bravo",
              "Charlie","Delta",
              "Echo", "Foxtrot",
              "Golf", "Hotel",
              "India", "Juliett",
              "Kilo", "Lima",
              "Mike", "November",
              "Oscar", "Papa",
              "Quebec", "Romeo",
              "Sierra", "Tango", 
              "Uniform", "Victor",
              "Whiskey", "X-ray",
              "Yankee", "Zulu"]


const test = "If you can, read?";
function charToCode(char){
  let code = char.charCodeAt(0) - offset;
  if (code <= 26 & code >= 0) return NATO[code];
  else return char
  }
function to_nato(words) {
	return words.replaceAll(" ", "")
    .toLowerCase().split("")
    .map( symbol => charToCode( symbol ))
    .join(" ");



}
console.log(to_nato(test));

