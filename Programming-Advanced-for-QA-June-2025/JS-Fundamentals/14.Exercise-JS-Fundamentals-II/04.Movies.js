function movies(inputArr) {
    let allMovies = [];

    for (const command of inputArr) {

        if (command.startsWith("addMovie")) {

            let movieName = command.substring(9);
            allMovies.push({'name' : movieName})
             
        }else if(command.includes('directedBy')){

            let [movieName, directorName] = command.split(' directedBy ')

            let movie = allMovies.find(m => m.name === movieName)

            if(movie) {
                movie.director = directorName 
            }

        }else if (command.includes('onDate')){
            let [movieName, movieDate] = command.split(' onDate ')

            let movie = allMovies.find(m => m.name === movieName)

            if(movie){
                movie.date = movieDate 
            }
        }
    }

    for (const movie of allMovies) {
        if(movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }
}

movies([

'addMovie The Avengers',

'addMovie Superman',

'The Avengers directedBy Anthony Russo',

'The Avengers onDate 30.07.2010',

'Captain America onDate 30.07.2010',

'Captain America directedBy Joe Russo'

]);