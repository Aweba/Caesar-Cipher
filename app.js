var answer = parseInt(prompt("¿Que es lo que deseas hacer? \n 1.Cifrar \n 2.Descifrar"));
var word = prompt("Ingrese el texto:");
var offset = parseInt(prompt("Ingrese la cantidad de espacios:"))%26;
var array = word.split("");
var cipher_word = "";
var decipher_word = "";
var num;

var count = word.length-1;
var i;
function cipher(){
  for(i=0;i<=count;i++) {
    var num_letra = array[i].charCodeAt(0);
    if(array[i] === " ")
      {cipher_word = cipher_word + " ";}
    if(num_letra>=65 && num_letra<=90)
      {num = 65;
       cipher_word = cipher_word + String.fromCharCode((array[i].charCodeAt(0) - num + offset) % 26 + num);
      }
    if(num_letra>=97 && num_letra<=122)
      {num = 97;
    cipher_word = cipher_word + String.fromCharCode((array[i].charCodeAt(0) - num + offset) % 26 + num);}
  }
  document.write(cipher_word);
}
function decipher(){

  for(i=0;i<=count;i++) {
    var num_letra = array[i].charCodeAt(0);
    if(array[i] === " ")
      {decipher_word = decipher_word + " ";}
    if(num_letra>=65 && num_letra<=90)
      {num = 65;
        var condition = (array[i].charCodeAt(0)-num) - offset;
        if(condition < 0){
            decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) +26 - offset));
        }
        else{
            decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) - num - offset ) % 26 + num);
        }
      }
    if(num_letra>=97 && num_letra<=122)
      {num = 97;
        var condition = (array[i].charCodeAt(0)-num) - offset;
        if(condition < 0){
            decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) +26 - offset));
        }
        else{
            decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) - num - offset ) % 26 + num);
        }
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
