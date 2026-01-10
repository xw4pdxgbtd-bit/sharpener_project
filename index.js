let form = document.getElementsByTagName('form')[0];

const descriptionInput = document.createElement('input');
descriptionInput.type = "text";
descriptionInput.id = "description";
descriptionInput.placeholder = "Enter fruit description";

const submitBtn = form.querySelector('button');
form.insertBefore(descriptionInput,submitBtn)

// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.

// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    const fruitName = document.getElementById('fruit-to-add').value;
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'fruit';
    li.appendChild(document.createTextNode(fruitName));

    const p = document.createElement('p');
    p.textContent = fruitDescription;
    p.style.fontStyle = "italic";
    li.appendChild(p);

    const deletBtn = document.createElement('button');
    deletBtn.className = 'delete-btn';
    deletBtn.textContent = 'x';
    li.appendChild(deletBtn);

    fruititems.appendChild(li)

    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.

    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});

const filterInput = document.getElementById('filter');

filterInput.addEventListener('keyup', function (event) {
    const searchText = event.target.value.toLowerCase();
    const fruits = document.getElementsByClassName('fruit');

    Array.from(fruits).forEach(function (fruit) {
        const fruitName = fruit.firstChild.textContent.toLowerCase();

        const p = fruit.querySelector('p');
        const description = p ? p.textContent.toLowerCase() : '';
        if (
            fruitName.includes(searchText) ||
            description.includes(searchText)
        ) {
            fruit.style.display = 'list-item';
        } else {
            fruit.style.display = 'none';
        }
    });
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.
