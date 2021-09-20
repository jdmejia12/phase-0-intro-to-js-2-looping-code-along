// Code your solutions in this file

function writeCards(names, event){
    const theseNames = []
    for(let i = 0; i<names.length;i++){
      console.log(`Wrapped ${names[i]} and added a bow!`);
      theseNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
      }
      
    return theseNames;
  }
  
  

function countDown(num){
    let i = num;
    while (i>=0){
    console.log(i);
      i--; // the iteration moves INSIDE the body of the loop!
    }
  }
  countDown(10)