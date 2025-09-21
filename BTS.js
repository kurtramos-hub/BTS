let balance = 1000;


function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    console.log("Checking balance...");
    setTimeout(() => {
      if (balance >= amount) {
        resolve("Balance is sufficient");
      } else {
        reject("Insufficient funds");
      }
    }, 500);
  });
}


function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    console.log("Deducting amount...");
    setTimeout(() => {
      // Simulate deduction
      balance -= amount;
      if (balance >= 0) {
        resolve(`Amount ${amount} deducted. Remaining balance: ${balance}`);
      } else {
        reject("Error while deducting amount");
      }
    }, 500);
  });
}


function confirmTransaction() {
  return new Promise((resolve, reject) => {
    console.log("Confirming transaction...");
    setTimeout(() => {
      
      resolve("Transaction complete");
    }, 500);
  });
}


function transferMoney(amount) {
  checkBalance(amount)
    .then(msg => {
      console.log(msg);
      return deductAmount(amount);
    })
    .then(msg => {
      console.log(msg);
      return confirmTransaction();
    })
    .then(msg => {
      console.log(msg);
    })
    .catch(err => {
      console.error("Transaction failed:", err);
    });
}


transferMoney(300);