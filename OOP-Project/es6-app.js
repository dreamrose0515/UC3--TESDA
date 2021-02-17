// Book Class
class Book {
    constructor(title, author, isbn) {
     this.title = title;
     this.author = author;
     this.isbn = isbn;
    }
  }
  // UI Class
  class UI {
    addBookToList(book) {
      const list = document.querySelector('#book-list');
      const row = document.createElement('tr');
    
      row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a class="delete">X</td>
          
      `;
      // console.log(row);
      list.appendChild(row);
    }
  
    showAlert(message, className) {
      // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = alert ${className};
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
   
    // Timeour after 3 sec
    setTimeout(function() {
     document.querySelector('.alert').remove();
    }, 3000);
  
    }
  
    deleteBook(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
  }
  
    clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
  }
  
  // Local Storage
  class Storage {
    static getBook() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }    
      return books;
    }
  
    static displayBooks() {
      const books = Storage.getBooks();
      books.forEach(function(book) {
       const ui = new UI();
  
      //  Add Book to UI
      ui.addBookToList();
      });
    }
  
    static addBook(book) {
     const books = Storage.getBooks();
     
     books.push(book);
  
     localStorage.setItem('books', JSON.stringify(books));
  
    }
  
    static removeBook(isbn) {
      const books = Storage.getBooks();
  
      books.forEach(function(book, index) {
        if(book.isbn) {
         books.splice(index, 1);
        }
      });
    
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', Storage.displayBooks);
  
  // Event Listeners
  document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
           // Instantiate Book
          const book = new Book(title, author, isbn);
           // Instantiate UI
          const ui = new UI();
  
        //  Add to Local Storage
        Storage.addBook();
          console.log(book);
  
  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all Fields', 'error');
    } else {
      // Add book to list
      ui.addBookToList(book);
      // Clear Fields
      ui.clearFields();
      // Show success
      ui.showAlert('Book Added!', 'success');
    }
    console.log(title, author, isbn);
    e.preventDefault();
  });
  
  // Event Listener for delete
  document.querySelector('#book-list').addEventListener('click', function(e) {
    //  Instanties UI
  
    // Remove from LS
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
  
  
     const ui = new UI();
     if(confirm('Are you sure?')) {
      ui.deleteBook(e.target);
     // Show Message
     ui.showAlert('Book Removed!', 'success');
     }
     
  });