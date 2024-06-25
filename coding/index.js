/*
Given two arrays of integers, write a function twistedArrayIntersection(arr1, arr2)
that returns an array containing the intersection of the two arrays.

However, instead of simply returning the common elements,
the twist is to add the index of the element in arr1 to the index of
the element in arr2 for each common element.

Create a function twistedArrayIntersection(arr1, arr2)
that takes two arrays of integers as input and returns an array of objects.

Each object should have:
value: the common element.
indexSum: the sum of the indices of this element in both arrays.
*/
export function twistedArrayIntersection(arr1, arr2) {
  const elementOne = {};
  arr1.forEach((element, index) => {
    if (!elementOne[element]) {
      elementOne[element] = [];
    }
    elementOne[element].push(index);
  });

  const elementTwo = {};
  arr2.forEach((element, index) => {
    if (!elementTwo[element]) {
      elementTwo[element] = [];
    }
    elementTwo[element].push(index);
  });

  const commonElements = Object.keys(elementOne).filter((element) =>
    elementTwo.hasOwnProperty(element)
  );

  const result = [];
  commonElements.forEach((element) => {
    const indexOne = elementOne[element];
    const indexTwo = elementTwo[element];

    indexOne.forEach((index1) => {
      indexTwo.forEach((index2) => {
        result.push({
          value: parseInt(element),
          indexSum: index1 + index2,
        });
      });
    });
  });

  return result;
}
/*
You need to create an advanced accounting system that can handle basic transactions
with some added validation. The system should process a list of transactions,
calculate the final balance, and ensure that the balance never goes below zero.
Each transaction will either be a deposit or a withdrawal.

Create a function processTransactions(transactions) that takes an array of
transaction objects as input. Each transaction object should have:
type: a string that can be either "deposit" or "withdrawal".
amount: a positive integer representing the amount of the transaction.

The function should return the final balance after processing all transactions.
The initial balance is 0.
If a withdrawal causes the balance to go below zero, the transaction should be ignored,
and the function should continue processing the remaining transactions.
*/
export function processTransactions(transactions) {
  let balance = 0;

  transactions.forEach((transaction) => {
    const { type, amount } = transaction;

    if (type === "deposit") {
      balance += amount;
    } else if (type === "withdrawal") {
      if (balance >= amount) {
        balance -= amount;
      }
    } else {
      console.log("error with type: ", type);
    }
  });

  return balance;
}
