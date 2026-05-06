let templateFile = await fetch("./component/MovieDetails/template.html");
let template = await templateFile.text();

let MovieDetails = {};

MovieDetails.format = function (movie) {
    if (!movie) {
        return `<div class="Movies__details"><p>Film non trouvé</p></div>`;
    }

    let movieTemplate = template;
    movieTemplate = movieTemplate.replaceAll('{{name}}', movie.name);
    movieTemplate = movieTemplate.replaceAll('{{description}}', movie.description);
    movieTemplate = movieTemplate.replaceAll('{{director}}', movie.director);
    movieTemplate = movieTemplate.replaceAll('{{year}}', movie.year);
    movieTemplate = movieTemplate.replaceAll('{{category}}', movie.id_category);
    movieTemplate = movieTemplate.replaceAll('{{min_age}}', movie.min_age);
    movieTemplate = movieTemplate.replaceAll('{{trailer}}', movie.trailer);
    movieTemplate = movieTemplate.replaceAll('{{image}}', movie.image);
    movieTemplate = movieTemplate.replaceAll('{{id}}', movie.id);
    
    return movieTemplate;
};

export { MovieDetails };
