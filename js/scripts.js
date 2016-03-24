//Business Logic
function BankAccount (first, last, type) {
  this.firstName = first;
  this.lastName = last;
  this.accountType = type;
}

function Transaction (deposit, withdrawl) {
  this.firstDeposit = deposit;
  this.firstWithdrawl = withdrawl;
}

//User Logic
