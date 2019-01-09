

class Bank{
	constructor(bankName){
		//takes in the name of the bank.
		//makes an object to store all accounts into
		this.accounts = {};
	}
	makeAccount( accountNumber){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		if (accountNumber === this.accounts[accountNumber]){
			return false;
		} else {
			this.accounts[accountNumber] = new Account(); 
		};
		return this.accounts[accountNumber];
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		if (this.accounts[accountNumber] === undefined){
			return false; 
		} else {
			return true; 
		};
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		if (this.accounts[accountNumber] === undefined){
			return "account "+accountNumber+" does not exist"; 
		} else if (this.accounts[accountNumber].getAmount() !== 0){
			return "account is not empty";
		} else {
			delete object[accountNumber];
			return "Account "+accountNumber+" has been deleted";
		};
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit(accountNumber, depositAmount){
		//deposits money into an account
		//takes in an account number and a numeric amount
		if (this.accounts[accountNumber] === undefined){
			return "account does not exist"; 
		} else {
			this.accounts[accountNumber].add(depositAmount);
			return "account "+accountNumber+" now has "+this.accounts[accountNumber].getAmount();
		};
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, withdrawAmount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		if (this.accounts[accountNumber] === undefined){
			return "account does not exist"; 
		} else{
			var withdrawalAmount = this.accounts[accountNumber].remove(withdrawAmount);
			var balance = this.accounts[accountNumber].getAmount();
			return "removed "+withdrawalAmount+" from account "+accountNumber+". It now has "+balance;
		};
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	};
};