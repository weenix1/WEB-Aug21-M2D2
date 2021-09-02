window.onload = function () {
  addToggleButtons();

  countAlbums();
};

function addToggleButtons() {
  for (let section of document.querySelectorAll("section")) {
    section.children[0].classList.add("collapse");
    section.children[0].classList.add("show");

    section.innerHTML =
      `
  <button class='btn btn-outline-light toggle-btn' data-bs-toggle="collapse" data-bs-target="#${section.id} > div">
  Show/hide section
  </button>
  ` + section.innerHTML;
  }
}

function countAlbums() {
  const albumN = document.querySelectorAll("img").length - 3;

  const span = document.createElement("span");

  span.classList.add("text-center");
  span.classList.add("d-inline-block");
  span.classList.add("w-100");
  span.classList.add("my-4");

  span.innerHTML = "P.S. This page contains " + albumN + " albums!";

  document.querySelector("footer").appendChild(span);
}

/*  EXERCISE 3
        Foreach album in the favorite list, place a badge on the top-left corner of the album with the genre of the music
     */

const addBadge = function () {
  const cardsTiles = document.querySelectorAll(".container .album-card");
  cardsTiles.forEach((title) => {
    // <span class="badge badge-pill badge-danger">Danger</span>
    const span = `<span class="badge badge-pill badge-dark">Rap</span>`;
    title.innerHTML += span;
  });
};

addBadge();

/* EXERCISE 5
        Add a DELETE bootstrap button at the end of each row of the tracklist. 
        Attach the functionality to remove its row when it gets clicked. (Requires DOM manipulation)  

        ## EXTRA CSS CHALLENGE ##
        Make only one button visible at a time, for each row, when the single row gets hovered. 
        Animate it with a fade-in effect upon the user hovering and fade-out when he/she goes away from it.
     */

function delete
