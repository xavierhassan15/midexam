// Function to handle the Buy Tickets button
function buyTickets() {
    alert("Redirecting to ticket purchase page...");
    // window.location.href = 'tickets.html';
}

// Function to handle the View Schedule button
function viewSchedule() {
    alert("Redirecting to schedule page...");
    // window.location.href = 'schedule.html';
}

// Function to filter films by genre
function filterFilms() {
    const genre = document.getElementById("genre-filter").value;
    const films = document.getElementsByClassName("film");

    for (let film of films) {
        if (genre === "all" || film.dataset.genre === genre) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    }
}

// Add this to your existing script.js file

function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        menu.classList.remove('menu-open');
    }
});

// Function to show film details in a modal
function showFilmDetails(title, synopsis) {
    document.getElementById("filmTitle").textContent = title;
    document.getElementById("filmSynopsis").textContent = synopsis;
    document.getElementById("filmModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("filmModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("filmModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
