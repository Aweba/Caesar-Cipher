var answer = parseInt(prompt("¿Que es lo que deseas hacer? \n 1.Cifrar \n 2.Descifrar"));
var word = prompt("Ingrese el texto");
var array = word.split("");
var cipher_word = "";
var decipher_word = "";
var count = word.length-1;
var i;
function cipher(){
  for(i=0;i<=count;i++) {
    cipher_word = cipher_word + String.fromCharCode((array[i].charCodeAt(0) - 65 + 7) % 26 + 65);
  }
  document.write(cipher_word);
}
function decipher(){
  for(i=0;i<=count;i++) {
    var condition = (array[i].charCodeAt(0)-65) - 7;
    if(condition < 0){
        decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) +26 - 7));
    }
    else{
        decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0)-65 - 7 ) % 26 + 65);

    }
}
    document.write(decipher_word);
}

if(answer === 1){
  cipher();
}
if(answer === 2){
  decipher();
}
