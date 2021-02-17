import {Book, UI, Storage} from './model.js'



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