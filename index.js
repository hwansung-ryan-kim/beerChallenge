
function beerCount () { 
    let i = 1


    while (i <= 100) {
        let bottlesOfBeer = (100 - i) 
        let bottlesOfBeerLeft = (bottlesOfBeer - 1)

         if (bottlesOfBeerLeft === 0) {
            bottlesOfBeerLeft = "No more"
            console.log (bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.\n Take one down and pass it around, " + bottlesOfBeerLeft + " bottles of beer on the wall.")
        }  
         else if (bottlesOfBeer === 0) {
            bottlesOfBeer = "No more"
            bottlesOfBeerLeft = 99
            console.log (bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.\n Go to the store and buy some more, " + bottlesOfBeerLeft + " bottles of beer on the wall.")
            } 
        else { 
            console.log (bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.\n Take one down and pass it around, " + bottlesOfBeerLeft + " bottles of beer on the wall.")
        }
        i++
    }   
}



/*
1. 99부터 1씩 뺀다.
2. 0이 되면 No more로 교체 
*/