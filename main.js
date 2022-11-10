import movieData from "./MovieData.js"

// movieDataEntries variable converts the object to an array //

let movieDataEntries = Object.entries(movieData);


// below code renders the movie data object to the html page //

const moviesContainer = document.querySelector("ul")

function displayMovie(movie) {
  const movieEl = document.createElement("li")
  const nameEl = document.createElement("h2")
  const plotEl = document.createElement("p")
  const castEl = document.createElement("p")
  const yearEl = document.createElement("p")
  const runtimeEl = document.createElement("p")
  const ratingEl = document.createElement("p")
    
  nameEl.textContent = movie[0]
  plotEl.textContent = "Plot: " + movie[1].plot
  castEl.textContent = "Cast: " + movie[1].cast
  yearEl.textContent = "Released: " + movie[1].year
  runtimeEl.textContent = "Runtime: " + movie[1].runtime
  ratingEl.textContent = "Rating: " + movie[1].rating
  
  movieEl.append(nameEl, plotEl, castEl, yearEl, runtimeEl, ratingEl)
  moviesContainer.append(movieEl)
}

function displayAllMovies(moviesArr) {
 moviesArr.forEach(displayMovie)
}

displayAllMovies(movieDataEntries)


// Below code re-renders movie database sorted by rating / runtime / release date // 

function sortByRating() {
  const sortedArr = movieDataEntries.sort(function (a, b) {
     return b[1].rating - a[1].rating
       })
       moviesContainer.innerHTML = ''
      displayAllMovies(sortedArr)
     };
 
  const sortRatingBtn = document.getElementById('btn1')
sortRatingBtn.addEventListener('click', sortByRating)

function sortByRuntime() {
  const sortedArr2 = movieDataEntries.sort(function (a, b) {
    return b[1].runtime - a[1].runtime
  })
  moviesContainer.innerHTML = ''
  displayAllMovies(sortedArr2)
};

const sortRuntimeBtn = document.getElementById('btn2')
sortRuntimeBtn.addEventListener('click', sortByRuntime)

function sortByYear() {
  const sortedArr3 = movieDataEntries.sort(function (a, b) {
    return b[1].year - a[1].year
  })
  moviesContainer.innerHTML = ''
  displayAllMovies(sortedArr3)
}

const sortYearBtn = document.getElementById('btn3')
sortYearBtn.addEventListener('click', sortByYear)

//The below code allows the user to input a new movie// 


// Below is a constructor function that allows up to create the template for a new object

class newMoveEntry {
  constructor(plot, cast, year, runtime, rating) {
    this.plot = plot;
    this.cast = cast;
    this.year = year;
    this.runtime = runtime;
    this.rating = rating;
  }
}

// new movie function declares the content of variables using dom maniplulation - these variables then fill the constructor to create a 
// new array which is pushed onto the source object (converted into array) and rendered onto the page // 

function newMovie(){
  const newName = document.getElementById("mName").value
  const newPlot = document.getElementById("plot").value
  const newCast = document.getElementById("cast").value
  const newYear = document.getElementById("yor").value
  const newRuntime = document.getElementById("runtime").value
  const newRating = document.getElementById("rating").value
  
  const newMoveEntryData = new newMoveEntry(newPlot, newCast, newYear, newRuntime, newRating);
  const newMovieArray = [newName, newMoveEntryData]
  movieDataEntries.push(newMovieArray)
  displayMovie(newMovieArray)
   }

  const submitNewMovie = document.getElementById("newMovieSubmit");
  submitNewMovie.addEventListener("click", newMovie);

  
  // To do next: 
  // Improve style using CSS
  // Allow form to only accept numbers where relevant and in between certain ranges - movie name must be input 