let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
    if (!Array.isArray(movies)) {
        movies = [movies];
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
