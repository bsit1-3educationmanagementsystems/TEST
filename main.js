const searchbar = document.getElementById('searchbar');
const easteregg = document.getElementById('EASTEREGG');
const pics = document.getElementById('PICS');

searchbar.addEventListener("keydown", function(event){
        
        if (event.key === "Enter"){
            if (searchbar.value === "ezekiel") {
            pics.style.backgroundImage = "url('ezekiel.jpg')";
            pics.style.backgroundSize = "cover";      
            pics.style.backgroundPosition = "center"; 
            }

            if (searchbar.value === "clarence") {
            pics.style.backgroundImage = "url('clarence.jpg')";
            pics.style.backgroundSize = "cover";      
            pics.style.backgroundPosition = "center"; 
            }

            } 
            if (searchbar.value === "jc"){
            easteregg.innerHTML = "BISAYAAAAAAAAAAAA"
            easteregg.style = "font-size:400px;"
            }

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
            window.location.href = "sbjctGuest.html";
        }

  })

    //windows.location.href = "ss.html"