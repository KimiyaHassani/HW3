
document.addEventListener("DOMContentLoaded", function (event) {

   

    document.getElementById("show").addEventListener("click", function () {
        console.log(MovieArray);
        let message = "List of movies\n";
        for (i = 0; i < MovieArray.length; i++) {
            message = message + MovieArray[i].movie + "  " + MovieArray[i].rate+ "  " + MovieArray[i].year + "\n";
        }
        document.getElementById("output").value = message;
    });
});

MovieArray = []; 

function formSubmitEvent() {
    let Movie = {
        movie:  document.getElementById("movie1").value,
        rate: document.getElementById("rate").value,
        year: document.getElementById("year").value,
       
    }
    

    MovieArray.push(Movie);
    
 
    document.getElementById("movie").value = Movie.rate;
  
}


