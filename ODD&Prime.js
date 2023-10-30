// A JavaScript program to find the one-digit difference numbers between 1 to 10 million
/**
 * ODDprimeNum is the class, that contains the functions and methods
 */

class ODDprimeNum{
    /**
     * To check if the number matches the constraints
     * @param {Number} number
     */
    Numchecking(number)
    {
        if(number < 0)
        {
            console.log("Enter positive numbers.") //prints the statement when the number is not +ve
        }
        if (typeof number!='number')
        {
            console.log("enter the integer data only !")
        }
    }
    /**
     * To Ensure the 'number' is ODD number (One digit diff)
     * @param {Number} number
     * @returns true if the number is ODD number (One digit diff)
     */
    ODDNumber(number)
    {
        this.Numchecking(number)
        if(number < 10)  //returns false when number is <10
        {
            return false
        }

        let x = number.toString()

        for(let i=0; i<x.length-1; i++)
        {
            if(Math.abs(Number(x[i]) - Number(x[i+1])) !== 1)
            {
                return false
            }
        }
        return true
    }
    /**
     * method of checking prime number.
     * @param {Number} number
     * @returns true when it is prime
     */
    Prime(number){
        if(number == 2)
        {
            return true
        }

        if(number%2 == 0) //if num is div by 2 then it is not a prime
        {
            return false
        }

        for(let i=3; i<=Math.floor(Math.sqrt(number)); i+=2)
        {
            if(number%i === 0)
            {
                return false
            }
        }
        return true
    }
}
/**
 * here is the function to print the ODD numbers
 */
function PrintNums()
{

        let oddPrime = []  //empty list is created
        ODD = new ODDprimeNum()  //class is assigned to the variable ODD

        for(let Givenrange = 0; Givenrange <= 10000000; Givenrange++)
        {  
            if(ODD.ODDNumber(Givenrange) && ODD.Prime(Givenrange))  // both methods are included
            {
                oddPrime.push(Givenrange)
            }
        }

        console.log(`\nThe count of numbers are :${oddPrime.length}`)
        console.log(oddPrime)

}

PrintNums()  //function called and it performs the entire  operations
