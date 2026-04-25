console.log("application.js loaded");

const searchbar = document.getElementById("searchbar");
const easteregg = document.getElementById("EASTEREGG");
const pics = document.getElementById("PICS");

if (searchbar) {
    searchbar.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const value = searchbar.value.trim().toLowerCase();

            if (
                value === "home" ||
                value === "main" ||
                value === "index"
            ) {
                window.location.href = "index.html";
            }

            if (
                value === "application" ||
                value === "sign-in" ||
                value === "sign up" ||
                value === "signup" ||
                value === "student" ||
                value === "teacher" ||
                value === "users"
            ) {
                window.location.href = "application.html";
            }

            if (
                value === "subjects" ||
                value === "subject" ||
                value === "courses" ||
                value === "guest"
            ) {
                window.location.href = "sbjctGuestmain.html";
            }

            if (value === "science") {
                window.location.href = "sbjctGuest.html";
            }

            if (value === "math") {
                window.location.href = "sbjctGuestMath.html";
            }

            if (value === "english") {
                window.location.href = "sbjctGuestEng.html";
            }

            if (value === "reading") {
                window.location.href = "sbjctGuestRead.html";
            }

            if (value === "abstract") {
                window.location.href = "sbjctGuestAbs.html";
            }
        }
    });
}

let accountType = ""; // teacher or student





