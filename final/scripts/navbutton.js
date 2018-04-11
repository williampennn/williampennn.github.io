function toggleNavMenu() {
   	console.log(document.getElementById("navigation").classList);
    document.getElementById("navigation").classList.toggle("hide");
   
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
