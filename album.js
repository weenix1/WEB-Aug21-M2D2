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

const bsAlert = document.querySelector(".alert.alert-success");
function removeClosest(e) {
  const removedAlbumTitle = e.target
    .closest("tr")
    .querySelector("td:first-of-type").innerText;
  //displays alert
  bsAlert.innerHTML =
    "You successfully removed " + "<strong>" + removedAlbumTitle + "</strong>";

  const tr = e.target.closest("tr");

  // <!-- EXERCISE 12
  //   Considering the button you've created in ex. 5 that deletes the row:
  //   Add a fade-out effect to the row before it gets removed, using a CSS transition effect
  // -->
  tr.classList.add("fade-out"); //fades away the tr before removing it from the dom

  setTimeout(function () {
    e.target.closest("tr").remove(); // removes the actual row of the table after the fade-out animation finishes
  }, 1000);

  bsAlert.classList.remove("d-none");

  setTimeout(function () {
    bsAlert.classList.add("fade-out--long", "fade-out");
  }, 2000);
  setTimeout(function () {
    bsAlert.classList.add("d-none");
  }, 4000);
  setTimeout(function () {
    bsAlert.classList.remove("fade-out--long", "fade-out");
  }, 4100);
}

function addNewTrack() {
  const trackNum = document.querySelector("#trackN").value;
  const trackName = document.querySelector("#trackName").value;
  const duration = document.querySelector("#duration").value;
  const feats = document.querySelector("#feats").value;
  const live = document.querySelector("#live").checked;

  // 	<!-- EXERCISE 9
  //      All the field (except for Feat. and Live Track) are required fields and require validation.
  //      If the user clicks on the Add button and some fields are empty, a warning alert must be shown
  //  -->

  //these are the only required fields to check
  if (!trackNum || !trackName || !duration) {
    //if they don't exist the execution stops here and displays an alert
    alert("Please fill in all the fields.");
  } else {
    const newTr = document.createElement("tr");

    // <!-- EXERCISE 11
    // Considering the "Add Track" functionality that you've created on ex. 8:
    //  - The new list-element added to the list should appear with a fade-in effect
    // -->
    newTr.classList.add("fade-in");

    let modalData = [trackNum, trackName, duration];

    //Creates as many td as necessary, and fills them in with the modal fields data
    for (let i = 0; i < modalData.length; i++) {
      const currentField = modalData[i];
      const td = document.createElement("td");
      td.innerText = currentField;

      newTr.appendChild(td);
    }

    // CREATES DELETE BUTTON AND APPENDS IT
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-outline-danger");

    // Attaches removeClosest to the delete button which is a function we created above
    button.addEventListener("click", removeClosest);

    button.innerText = "Delete";

    const td = document.createElement("td");
    td.classList.add("text-right");

    td.appendChild(button);
    newTr.appendChild(td);
    document.querySelector(".tracklist").appendChild(newTr);

    //SHOWS ALERT
    bsAlert.innerText = "New table row added";
    document.querySelector(".alert.alert-success").classList.toggle("d-none");

    //clears the previously added fade-in class not to conflict with the future fade-out upon delete
    setTimeout(function () {
      newTr.classList.remove("fade-in");
    }, 1500);
  }
}

// 	<!-- EXERCISE 10
// 		Make sure the "Close" button clears out the input fields AND closes the modal
//  -->
function clearFields() {
  document.querySelector("#trackN").value = "";
  document.querySelector("#trackName").value = "";
  document.querySelector("#duration").value = "";
  document.querySelector("#feats").value = "";
  document.querySelector("#live").checked = false;
}
