import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
  static getAllAuthors() {
    return Object.assign([], authors);

  }

  static saveAuthor(author) {
    author = Object.assign({}, author); // to avoid manipulating object passed in.
    if (author.id) {
      const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
      authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = generateId(author);
      authors.push(author);
    }

  }

  static deleteAuthor(deletedAuthor) {
    const indexOfAuthorToDelete = authors.findIndex(author => {
      author.id == deletedAuthor.id;
    });
    authors.splice(indexOfAuthorToDelete, 1);
  }
}

export default AuthorApi;
