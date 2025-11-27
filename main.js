const searchbar = document.getElementById('searchbar');
const easteregg = document.getElementById('EASTEREGG');
const pics = document.getElementById('PICS');

searchbar.addEventListener("keydown", function(event){
        
        if (event.key === "Enter"){
            if (searchbar.value === "ezekiel"){
                console.log('BISAYA KA EXZEL');
                pics.style = "background-img:ezekiel.jpg;"
            } else {}
            if (searchbar.value === "jc"){
            easteregg.innerHTML = "BISAYAAAAAAAAAAAA"
            easteregg.style = "font-size:400px;"
            }

            if (
            ssearchbar.value === "home" ||
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

  }})

    //windows.location.href = "ss.html"