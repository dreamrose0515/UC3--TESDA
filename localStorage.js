// set local storage item

// localStorage.setItem('name', 'JC');
// localStorage.setItem('age', 29)

// // set session storage item
// sessionStorage.setItem('name', 'Darwin');

// // Remove from storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const name = localStorage.getItem('age');

// clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
    // e.preventDefault();

    const task = document.querySelector('#task').nodeValue;

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push();

    localStorage.setItem('tasks', JSON.stringify());
    // console.log(task);

    alert('Task saved')
    tasks.forEach(function(task) {
        console.log(task);
    });
});