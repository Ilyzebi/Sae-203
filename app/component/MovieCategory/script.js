import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (categoryData, imageBaseUrl = './server/images/') {
    let html = template;
    html = html.replace('{{categoryName}}', categoryData.category);
    
    let moviesHtml = Movie.format(categoryData.movies);

    html = html.replace('{{movies}}', moviesHtml);
    return html;
};

MovieCategory.formatMany = function(categories, imageBaseUrl = './server/images/'){
    let html = '';
    for (const categoryData of categories) {
        html += MovieCategory.format(categoryData, imageBaseUrl);
    }
    return html;
};

export { MovieCategory };