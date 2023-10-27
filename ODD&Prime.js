//JavaScript program to find the one-digit difference numbers between 1 to 10 million
//with the Class ODDprimeNum


class ODDprimeNum{

    /**
     * To check if the number is positive or not
     * @param {Number} number
     */
    check(number)
    {
        if(number < 0)
        {
            console.log("Enter positive numbers.") //prints the statement when the number is not +ve
        }

    }
    
    /**
     * To check if the 'number' is ODD number.
     * @param {Number} number
     * @returns true if the number is ODD number
     */
    isODDNumber(number){
        this.check(number)

        //number less than 10 is not a ODD number.
        if(number < 10){
            return false
        }

        let n = number.toString()

        for(let i=0; i<n.length-1; i++){
            if(Math.abs(Number(n[i]) - Number(n[i+1])) !== 1){
                return false
            }
        }
        return true
    }

    /**
     * To check if the 'number' is prime or not.
     * @param {Number} number ,the number we need to check.
     * @returns true ,If the number is prime.
     */
    isPrime(number){

        //2 is the only even prime number.
        if(number == 2){
            return true
        }

        //Every other even number is not prime.
        if(number%2 == 0){
            return false
        }

        //Every number has it's factors till the square root of the number.
        for(let i=3; i<=Math.floor(Math.sqrt(number)); i+=2){
            if(number%i === 0){
                return false
            }
        }
        return true
    }
}

function PrintNums()
{

        let oddPrime = [] 
        ODD = new ODDprimeNum()

        
        for(let Givenrange = 0; Givenrange <= 10000000; Givenrange++)
        {  
            if(ODD.isODDNumber(Givenrange) && ODD.isPrime(Givenrange))
            {
                oddPrime.push(Givenrange)
            }
        }

        console.log(`\nThe count of numbers are :${oddPrime.length}`)
        console.log(oddPrime)



}

PrintNums()
