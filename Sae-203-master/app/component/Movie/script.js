let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};


Movie.movies = [];

Movie.format = function (movies) {

    if (!movies || !Array.isArray(movies)) {
        movies = Array.isArray(movies) ? movies : [];
    }

    if (movies.length === 0) {
        return `<div class="Movies"><p>aucun film disponible pour le moment</p></div>`;
    }

    Movie.movies = movies;

    let html = "";
    movies.forEach(movie => {
        let movieTemplate = template;
        movieTemplate = movieTemplate.replaceAll('{{name}}', movie.name);
        movieTemplate = movieTemplate.replaceAll('{{image}}', movie.image);
        movieTemplate = movieTemplate.replaceAll('{{id}}', movie.id);
        
        html += movieTemplate;
    });
    return `<div class="Movies">${html}</div>`;

};

export { Movie };
