// ADDING EVENT TO ALL ELEMENTS // 
const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// TOGGLE SEARCH BOX //
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");
addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active")
})


//storing movieId in localStorage
const getMovieDetail=function(movieId){
    window.localStorage.setItem("movieId",String(movieId))
}



const getMovieList=function(urlParam,genreName){
    window.localStorage.setItem("urlParam",urlParam);
    window.localStorage.setItem("genreName",genreName);
}




