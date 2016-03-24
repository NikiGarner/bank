//Business Logic
function BankAccount (first, last, type, amount) {
  this.firstName = first;
  this.lastName = last;
  this.accountType = type;
  this.amount = parseInt(amount);
};


BankAccount.prototype.deposit = function(deposit) {
  this.amount = this.amount + parseInt(deposit);
  return this.amount;
};

BankAccount.prototype.withdrawl = function(withdrawl) {
  this.amount = this.amount - parseInt(withdrawl);
  return this.amount;
}

//User Logic
$(document).ready(function(){
  $("form#new-account").submit(function(event){

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedAccountType = $("input#type").val();
      var transactionTotal = new Account(inputtedFirstName, inputtedLastName, in)

      var newBankAccount = new BankAccount (inputtedFirstName, inputtedLastName, inputtedAccountType);

      $("#name").append(inputtedFirstName);
  });

  $("form#transaction-form").submit(function(event){
    var inputtedDeposit = $("input#new-deposit").val();
    var inputtedWithdrawl = $("input#new-withdrawl").val();

    var newTransaction = new Transaction (inputtedDeposit, inputtedWithdrawl);

    $("ul#transactionTotal").append(newTransaction += inputtedDeposit);

    event.preventDefault();
  });
});

/*function Account(name, amount) {
      this.name = name;
      this.amount = parseInt(amount);
    };

    Account.prototype.withdrawl = function(withdrawl) {
      this.amount = this.amount - parseInt(withdrawl);
      return this.amount;
    };

    Account.prototype.deposit = function(deposit) {
      this.amount = this.amount + parseInt(deposit);
      return this.amount;
    };

    $(document).ready(function() {
      $("form#accountInfo").submit(function(event) {
        var newName = $("input#name").val();
        var newDeposit = $("input#initialDeposit").val();
        var resultAccount = new Account(newName, newDeposit);
          var resultName = resultAccount.name;
          var resultDeposit = resultAccount.amount;

        $(".output").text(resultName + " " + "$" + resultDeposit);
        $("#result").show();
        event.preventDefault();

        $("form#withdrawl").submit(function(event) {
          var newWithdrawl = $("input#withdrawl").val();
          var withdrawlResult = resultAccount.withdrawl(newWithdrawl);

          $(".output").empty().text(resultName + " $" + withdrawlResult);

          $("input").val("");
          event.preventDefault();
        });

        $("form#deposit").submit(function(event) {
          var newDeposit = $("input#deposit").val();
          var depositResult = resultAccount.deposit(newDeposit);

          $(".output").empty().text(resultName + " $" + depositResult);

          $("input").val("");
          event.preventDefault();
        });

      });
    });
    */
