function rot13(str) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let decoded ="";
    //console.log(decoded += "i")
    //console.log(str.charAt())
    //console.log(1)
    for (let i = 0; i < str.length; i++){
      if (str.charAt(i).match(/[a-z]/i)){
        //console.log("yes it's a character")
        for (let j = 0; j < alphabet.length; j++){
          //console.log(alphabet.length)
          if (str.charAt(i) == alphabet[j]){
            if (j + 13 < 26){
              decoded += alphabet[j+13];
            }else if (j + 13 >= 26){
              decoded += alphabet[j + 13 - 26]
            }      
          }
        }
      }else{
        decoded += str.charAt(i)
      } 
    }
    return decoded;
  }
    
  
  
  console.log(rot13("SERR PBQR PNZC"));