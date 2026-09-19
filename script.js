// =========================
// MY LIST
// =========================

let myList = JSON.parse(localStorage.getItem("myList")) || [];


// =========================
// SAVE MY LIST
// =========================

function saveMyList() {

    localStorage.setItem(
        "myList",
        JSON.stringify(myList)
    );

}


// =========================
// ADD MOVIE TO MY LIST
// =========================

function addToMyList(movieName) {

    if (!myList.includes(movieName)) {

        myList.push(movieName);

        saveMyList();

        alert(movieName + " added to My List ❤️");

        displayMyList();

    } else {

        alert(movieName + " is already in My List!");

    }

}


// =========================
// DISPLAY MY LIST
// =========================

function displayMyList() {

    let container =
        document.getElementById("myListContainer");

    container.innerHTML = "";


    if (myList.length === 0) {

        container.innerHTML =
            '<p class="empty-message">Your My List is empty.</p>';

        return;
    }


    myList.forEach(function(movieName, index) {

        let item =
            document.createElement("div");

        item.className = "my-list-item";


        item.innerHTML = `
            <span>❤️ ${movieName}</span>

            <button class="remove-btn"
                    onclick="removeFromMyList(${index})">
                Remove
            </button>
        `;


        container.appendChild(item);

    });

}


// =========================
// REMOVE FROM MY LIST
// =========================

function removeFromMyList(index) {

    myList.splice(index, 1);

    saveMyList();

    displayMyList();

}


// =========================
// WATCH MOVIE
// =========================

function watchMovie(movieName) {

    let modal =
        document.getElementById("videoModal");

    let video =
        document.getElementById("movieVideo");

    let title =
        document.getElementById("videoTitle");


    title.textContent =
        movieName + " - Trailer";


    /*
       Interstellar trailer
    */

    if (movieName === "Interstellar") {

        video.src =
            "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1";

    } else {

        /*
           For other movies,
           YouTube search result is opened.
        */

        window.open(
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(movieName + " trailer"),
            "_blank"
        );

        return;
    }


    modal.style.display = "flex";

}


// =========================
// CLOSE VIDEO
// =========================

document
    .getElementById("closeVideo")
    .addEventListener("click", function() {

        let modal =
            document.getElementById("videoModal");

        let video =
            document.getElementById("movieVideo");


        modal.style.display = "none";

        video.src = "";

    });


// =========================
// CLICK OUTSIDE VIDEO
// =========================

document
    .getElementById("videoModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            this.style.display = "none";

            document
                .getElementById("movieVideo")
                .src = "";
        }

    });


// =========================
// HOME BUTTON
// =========================

document
    .getElementById("homeLink")
    .addEventListener("click", function(event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


// =========================
// MOVIES BUTTON
// =========================

document
    .getElementById("moviesLink")
    .addEventListener("click", function(event) {

        event.preventDefault();

        document
            .getElementById("movies")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// =========================
// TV SHOWS BUTTON
// =========================

document
    .getElementById("tvLink")
    .addEventListener("click", function(event) {

        event.preventDefault();

        document
            .getElementById("tvshows")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// =========================
// MY LIST NAVBAR
// =========================

document
    .getElementById("myListLink")
    .addEventListener("click", function(event) {

        event.preventDefault();

        displayMyList();

        document
            .getElementById("mylist")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// =========================
// HERO WATCH NOW
// =========================

document
    .getElementById("heroWatch")
    .addEventListener("click", function() {

        watchMovie("Interstellar");

    });


// =========================
// HERO MY LIST
// =========================

document
    .getElementById("heroList")
    .addEventListener("click", function() {

        addToMyList("Interstellar");

    });


// =========================
// FEATURED WATCH NOW
// =========================

document
    .getElementById("featuredWatch")
    .addEventListener("click", function() {

        watchMovie("Interstellar");

    });


// =========================
// MOVIE CARD MY LIST BUTTONS
// =========================

let listButtons =
    document.querySelectorAll(".add-list-btn");


listButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        let movieName =
            button.getAttribute("data-movie");

        addToMyList(movieName);

    });

});


// =========================
// SEARCH
// =========================

document
    .querySelector(".search-btn")
    .addEventListener("click", function() {

        let movie =
            prompt("Enter movie name:");

        if (
            movie !== null &&
            movie.trim() !== ""
        ) {

            alert(
                "Searching for: " +
                movie
            );

        }

    });


// =========================
// PROFILE
// =========================

document
    .querySelector(".profile-btn")
    .addEventListener("click", function() {

        alert(
            "Welcome to your CINORA Profile!"
        );

    });


// =========================
// LOAD MY LIST
// =========================

displayMyList();