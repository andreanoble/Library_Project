function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  /* The `findAccountById()` has two parameters, in the following order:
- An array of account objects.
- A string ID of a single account object.
It returns the account object that has the matching ID.

  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/

  return accounts.find(account => account.id === id);

  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 

}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  /*
  The `sortAccountsByLastName()` function in `public/src/accounts.js` has a single parameter:
- An array of account objects.
It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
*/

  const sortedLastName = accounts.sort((accountA, accountB) => 
    (accountA.name.last > accountB.name.last ? 1 : -1) );
  return sortedLastName;
  }
// Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 


function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  /*It returns an array of strings. Each string represents the full name of the account in the format
   `<firstName> <lastName>`. The strings appear in the array  in the original order of the account objects.
   */
 return accounts.map(account => `${account.name.first} ${account.name.last}` );
 
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
