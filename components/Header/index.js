// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const create = (element) => document.createElement(element);


function Header() {
    // Create Elements
    const header = create('div');
    const date = create('span');
    const title = create('h1');
    const temp = create('span');

    // Assign Classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Set content
    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // Append stuff
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    // Good to go
    return header;
}

// console.log(Header()); // Check if working