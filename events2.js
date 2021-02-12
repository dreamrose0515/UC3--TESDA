const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5')
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Focus
taskInput.addEventListener('focus');
// // Blur
taskInput.addEventListener('blur');
// Cut
taskInput.addEventListener('cut', runEvent);
// paste
taskInput.addEventListener('paste', runEvent);
// Change
select.addEventListener('change', runEvent);


funtion runEvent(e) {
    console.log(`Event Type; ${e.type}`)

    console.log(e.target.value);

    heading.innerText = e.target.value;

    // Get input value
    console.log(taskInput.value);
}