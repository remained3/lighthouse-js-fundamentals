const repeat = Number(process.argv[2])

const diceroller = function(number) {
  let output = []
  for (let i = 0; i < repeat; i++) {
    let result = Math.floor((Math.random()*6)+1)
    output += result + ', '
  }
  console.log("Rolled " + number+ " dice: "+ output);
}

diceroller(repeat);