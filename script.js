

let myList = JSON.parse(localStorage.getItem("myList")) || [];




function saveMyList() {

    localStorage.setItem(
        "myList",
        JSON.stringify(myList)
    );

}





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




function removeFromMyList(index) {

    myList.splice(index, 1);

    saveMyList();

    displayMyList();

}




function watchMovie(movieName) {

    let modal =
        document.getElementById("videoModal");

    let video =
        document.getElementById("movieVideo");

    let title =
        document.getElementById("videoTitle");


    title.textContent =
        movieName + " - Trailer";


   

    if (movieName === "Interstellar") {

        video.src =
            "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1";

    } else {

       

        window.open(
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(movieName + " trailer"),
            "_blank"
        );

        return;
    }


    modal.style.display = "flex";

}



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



document
    .getElementById("homeLink")
    .addEventListener("click", function(event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });




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




document
    .getElementById("heroWatch")
    .addEventListener("click", function() {

        watchMovie("Interstellar");

    });




document
    .getElementById("heroList")
    .addEventListener("click", function() {

        addToMyList("Interstellar");

    });



document
    .getElementById("featuredWatch")
    .addEventListener("click", function() {

        watchMovie("Interstellar");

    });



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




document
    .querySelector(".profile-btn")
    .addEventListener("click", function() {

        alert(
            "Welcome to your CINORA Profile!"
        );

    });




displayMyList();


fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => {
        console.log("Movies from MySQL:", movies);
    })
    .catch(error => {
        console.log("Error:", error);
    });






   

