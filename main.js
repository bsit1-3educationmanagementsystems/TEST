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
    }}) 

    //windows.location.href = "ss.html"