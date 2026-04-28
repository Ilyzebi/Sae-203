let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
    // Gérer les cas où movies est null, undefined, ou pas un array
    if (!movies || !Array.isArray(movies)) {
        movies = Array.isArray(movies) ? movies : [];
    }

    if (movies.length === 0) {
        return `<div class="Movies"><p>aucun film disponible pour le moment</p></div>`;
    }

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
