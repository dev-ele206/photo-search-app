
var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function(e){
    e.preventDefault()
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready: <p>${image.photographer}</p>
       var contentsDatabase = JSON.parse(xhttp.responseText);
        
        var imageDatabase = contentsDatabase.photos;
        console.log(imageDatabase)
        var imageSection = document.getElementById("image-section");
        var imageColumn = document.querySelectorAll(".image-column");
        var imageColumn1 = document.getElementById("image-column1");
        var imageColumn2 = document.getElementById("image-column2");
        var imageColumn3 = document.getElementById("image-column3");
    


        imageColumn1.innerHTML="";
        imageColumn2.innerHTML="";
        imageColumn3.innerHTML="";
        var i = 0;
        imageDatabase.forEach(function(image){
                
                var imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");
                imageContainer.innerHTML=`
                    <img class = "images" src=${image.src.original}>
                    <p class ="photographer">${image.photographer}</p>
                `
    
            imageColumn[i].appendChild(imageContainer);
            if (i<imageSection.childElementCount-1){i++;}
            else { i = 0};
         
        })
        
        
    }
};
var textValue = document.querySelector(".search-bar").value;
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001cf22ff5427034d849800eb71cccab80f")
xhttp.send();
})