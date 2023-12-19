function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  /*
  - An array of author objects.
- An integer ID of a single author object.
It returns the author object that has the matching ID.
*/
  for (let i = 0; i < authors.length; i++){
    if (authors[i].id === id){
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  /*
  - An array of book objects.
- A string ID of a single book object.

It returns the book object that has the matching ID.
*/

  return books.find(book => book.id === id);

}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
