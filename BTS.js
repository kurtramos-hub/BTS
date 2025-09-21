let balance = 1000;

// Step 1: checkBalance
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

// Step 2: deductAmount
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

// Step 3: confirmTransaction
function confirmTransaction() {
  return new Promise((resolve, reject) => {
    console.log("Confirming transaction...");
    setTimeout(() => {
      // Simulate success confirmation
      resolve("Transaction complete");
    }, 500);
  });
}

// Putting it all together
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

// Example call
transferMoney(300);