
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
	
		this.operatorStorage;
		this.numbers = [];
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
		if (operator === "+" || operator === "-" || operator === "*" || operator === "/" ){
			this.operatorStorage = operator;
			return true;
		} else {
			return false; 
		}
	};

	loadNumber(num1){

		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
		
		if (typeof(num1)==="number" && this.numbers.length < 2){
			this.numbers.push(num1);
			return this.numbers.length;
		} else {
			// this.operatorStorage.push(num1);
			return false;
		};
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
		var returnValue = null; 
		switch (this.operatorStorage) {
			case "+":
				returnValue = this.numbers[0] + this.numbers[1];
				break;
			case "-":
				returnValue = this.numbers[0] - this.numbers[1];
				break;
			case "*":
				returnValue = this.numbers[0] * this.numbers[1];
				break;
			case "/":
				returnValue = this.numbers[0] / this.numbers[1];
				break;
			default:
			console.log("something is wrong on calculating");
				break;
		}
		this.numbers = [];
		return returnValue; 
	}
}