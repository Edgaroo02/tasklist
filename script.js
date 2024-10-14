// Initialize an empty array
let array = [];

// function to alert for missing input text
function missing() {
    alert('Please enter a valid element.');
}
// Function to display array elements
function displayArray() {
    const arrayContainer = document.getElementById('arrayElements');
    arrayContainer.innerHTML = ''; // Clear previous content

    array.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        const inputBox = document.getElementById("elementInput");
        elementDiv.textContent = `Element ${index + 1}: ${element}`;
        arrayContainer.appendChild(elementDiv);
        elementInput.value = '';
    });
}

// Function to add element to the end of the array
function addElement() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.push(elementInput);
        displayArray();
    } else {
        missing();
    }
}

// Function to remove element from the beginning of the array
function removeElement() {
    if (array.length === 0) {
        alert("The array is empty!");
        return;
    } else {
        array.shift();
    }
    displayArray();
}

// Function to remove element from the end of the array
function removeLast() {
    if (array.length === 0) {
        alert("The array is empty!");
        return;
    } else {
        array.pop();
    }
    displayArray();
}

// Function to Add input to the start of the array
function addFirst() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.unshift(elementInput);
        displayArray();
    } else {
        missing();
    } 
}

function splice() {
    if (array.length > 2) {
        const elementInput = document.getElementById('elementInput').value.trim();
        if (elementInput !== '') {
        array.splice(array.length/2, 1, elementInput);
        displayArray();
        } else { 
        missing();
        }
    } else {
        alert("There needs to be 2 or more inputs to splice an input in the middle of this array")
    }
}

/*

// Function to remove element from the beginning or end of the array
function removeElement(type) {
    if (array.length === 0) {
        alert('Array is empty.');
        return;
    }

    switch (type) {
        case 'first':
            array.shift();
            break;
        case 'last':
            array.pop();
            break;
        default:
            alert('Invalid operation.');
    }

    displayArray();
}

*/