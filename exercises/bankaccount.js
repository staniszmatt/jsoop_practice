

class Account{
	constructor(){
		//store the amount of money in the account
		this.amountInBank = null; 
	}
	add( amountToAdd ){
		var newAmountInBank = 0;
		//adds money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		this.amountInBank += amountToAdd;
		newAmountInBank = this.amountInBank; 
		//returns the new amount in the account

		return newAmountInBank; 
	}
	remove( amountToRemove ){
		var verifyAmountWithdrawn = 0;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		if (amountToRemove > this.amountInBank){
			//if more, only withdraw the amount in the account, not more
			verifyAmountWithdrawn = this.amountInBank;
			this.amountInBank -= this.amountInBank;
		} else {
			//if less, withdraw the amount specified
			verifyAmountWithdrawn = amountToRemove;
			this.amountInBank -= amountToRemove;
		}
		return verifyAmountWithdrawn;
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amountInBank; 
		//returns the amount in the account
	}
}