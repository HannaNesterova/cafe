// CAROUSEL OF THE FEEDBACKS

const carousel = document.querySelector('.carousel_feedback');
const arrowIcons = document.querySelectorAll('i');
let firstIcon = carousel.querySelectorAll('.box-img')[0];

let isDragStart = false, prevPageX, prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.classList.contains("left-arrow")) {
            carousel.scrollLeft -= 100;
        } else if (icon.classList.contains("right-arrow")) {
            carousel.scrollLeft += 100;
        }
    })
})


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener('mouseover', dragging)
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);

// BURGER
const body = document.querySelector('body');
const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('locked');
})


function handleSubmit(e){
    e.preventDefault();

    // Retrieve form values
    const name = document.querySelector('.input_name').value;
    const email = document.querySelector('.input_name[type="email"]').value;
    const persons = document.querySelector('.input_order:nth-of-type(1)').value;
    const timing = document.querySelector('.input_order:nth-of-type(2)').value;
    const date = document.querySelector('.input_order:nth-of-type(3)').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Persons:", persons);
    console.log("Timing:", timing);
    console.log("Date:", date);

    // Create an object to hold the reservation data
    const reservationData = {
        name: name,
        email: email,
        persons: persons,
        timing: timing,
        date: date
    };

    // Make an AJAX request to the server using the fetch API
    fetch('https://example.com/api/reservations', {
        method: 'POST', // Use the HTTP method appropriate for your server endpoint
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // If you expect a JSON response from the server
        })
        .then(data => {
            // Handle the server's response data here (if applicable)
            console.log('Reservation successful:', data);
            // You can show a success message to the user or redirect to a thank-you page
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occurred during the AJAX request
            // You can show an error message to the user in this case
        });
}

// Add a submit event listener to the form to handle form submission
const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', handleSubmit);
