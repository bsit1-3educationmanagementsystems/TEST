const searchbar = document.getElementById('searchbar');
const easteregg = document.getElementById('EASTEREGG');
const pics = document.getElementById('PICS');

searchbar.addEventListener("keydown", function(event){
        
        if (event.key === "Enter"){
            if (
            searchbar.value === "home" ||
            searchbar.value === "Home" ||
            searchbar.value === "Main" ||
            searchbar.value === "main" ||
            searchbar.value === "Index" ||
            searchbar.value === "index"
            ) {
            window.location.href = "index.html";
            }

            if (
            searchbar.value === "application" ||
            searchbar.value === "sign-in" ||
            searchbar.value === "student" ||
            searchbar.value === "teacher" ||
            searchbar.value === "users"
            ) {
            window.location.href = "application.html";
            }

            if (
            searchbar.value === "subjects" ||
            searchbar.value === "subject" ||
            searchbar.value === "courses" ||
            searchbar.value === "guest"
            ) {
            window.location.href = "sbjctGuestmain.html";
            }

            if (
            searchbar.value === "science"
            ) {
            window.location.href = "sbjctGuest.html";
            }

            if (
            searchbar.value === "math"
            ) {
            window.location.href = "sbjctGuestMath.html";
            }

            if (
            searchbar.value === "english"
            ) {
            window.location.href = "sbjctGuestEng.html";
            }

            if (
            searchbar.value === "reading"
            ) {
            window.location.href = "sbjctGuestRead.html";
            }

            if (
            searchbar.value === "abstract"
            ) {
            window.location.href = "sbjctGuestAbs.html";
            }

  }})


    //windows.location.href = "ss.html"
