let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};


Movie.movies = [];

Movie.format = function (movies) {

    if (!movies || !Array.isArray(movies)) {
        movies = Array.isArray(movies) ? movies : [];
    }

    if (movies.length === 0) {
        return `<p class="movies__empty">aucun film disponible pour le moment</p>`;
    }

    Movie.movies = movies;

    let html = "";
    movies.forEach(movie => {
        let movieTemplate = template;
        movieTemplate = movieTemplate.replaceAll('{{name}}', movie.name);
        movieTemplate = movieTemplate.replaceAll('{{image}}', movie.image);
        movieTemplate = movieTemplate.replaceAll('{{id}}', movie.id);
        movieTemplate = movieTemplate.replaceAll('{{year}}', movie.year ?? '');
        movieTemplate = movieTemplate.replaceAll('{{min_age}}', movie.min_age ?? '');
        movieTemplate = movieTemplate.replaceAll('{{description}}', movie.description ? movie.description.substring(0, 80) + '…' : '');
        
        html += movieTemplate;
    });
    return html;

};

export { Movie };
