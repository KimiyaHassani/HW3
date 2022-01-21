
document.addEventListener("DOMContentLoaded", function (event) {

   

    document.getElementById("show").addEventListener("click", function () {
        let ul = document.createElement('ul');
        let movieList = document.getElementById("output").appendChild(ul);

        for (const movie of MovieArray1) {
            SortedMovieArray.push(movie)
        }
        for (const movie of MovieArray2) {
            SortedMovieArray.push(movie)
        }
        for (const movie of MovieArray3) {
            SortedMovieArray.push(movie)
        }
        for (const movie of MovieArray4) {
            SortedMovieArray.push(movie)
        }
        for (const movie of MovieArray5) {
            SortedMovieArray.push(movie)
        }

        movieList.innerHTML = "<h2>List of movies</h>"
        console.log(SortedMovieArray);
        for (i = 0; i < SortedMovieArray.length; i++) {
            movieList.innerHTML += "<li>" + SortedMovieArray[i].movie + " " + SortedMovieArray[i].rate + " " + SortedMovieArray[i].year + "</li>";
        }

    });
});

let movieCount = 0;
let MovieArray1 = []; 
let MovieArray2 = [];
let MovieArray3 = [];
let MovieArray4 = [];
let MovieArray5 = [];
let SortedMovieArray = [];

function formSubmitEvent() {

    movieCount ++;

    let Movie = {
        movie:  document.getElementById("movie1").value,
        rate: Number(document.getElementById("rate").value),
        year: document.getElementById("year").value,
    }

    if(Movie.rate == "" || Movie.rate < 1 || Movie.rate > 5){
        alert("Error, undefined rating. Please rate between 1 and 5.")
    }

    if(movieCount < 11 ){

        if(Movie.rate === Number(1)){
            MovieArray1.push(Movie);
        }
        if(Movie.rate === Number(2)){
            MovieArray2.push(Movie);
        }
        if(Movie.rate === Number(3)){
            MovieArray3.push(Movie);
        }
        if(Movie.rate === Number(4)){
            MovieArray4.push(Movie);
        }
        if(Movie.rate === Number(5)){
            MovieArray5.push(Movie);
        }
    }
 
    document.getElementById("movie").value = Movie.rate;
  
}


