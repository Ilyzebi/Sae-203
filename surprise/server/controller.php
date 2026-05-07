<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController(){
    $age = isset($_GET['age']) ? (int)$_GET['age'] : 0;
    $movies = getAllMovies($age);
    return $movies;
}

function addMovieController(){
    // Vérifier que tous les paramètres requis sont présents
    $required = ['name', 'image', 'year', 'length', 'description', 'director', 'category', 'trailer', 'min_age'];
    foreach ($required as $field) {
        if (!isset($_POST[$field])) {
            return false;
        }
    }
    
    $name = $_POST['name'];
    $image = $_POST['image'];
    $year = $_POST['year'];
    $length = $_POST['length'];
    $description = $_POST['description'];
    $director = $_POST['director'];
    $category = $_POST['category'];
    $trailer = $_POST['trailer'];
    $min_age = $_POST['min_age'];
    $result = addMovie($name, $image, $year, $length, $description, $director, $category, $trailer, $min_age);
    
    if ($result!=0) {
        return "Movie added successfully.";
    } else {
        return "Failed to add movie.";
    }
}

function readMoviesByCategoryController(){
    $movies = getMoviesByCategory();
    
    return $movies;
}

function readCategoriesController(){
    $categories = getAllCategories();
    return $categories;
}

function readProfilesController(){
    $profiles = getAllProfiles();
    return $profiles;
}

function readProfileByIdController(){
    if (!isset($_GET['id'])) {
        return false;
    }
    
    $id = $_GET['id'];
    $profile = getProfileById($id);
    
    return $profile;
}

function addProfileController(){
    $required = ['name', 'image', 'min_age'];
    foreach ($required as $field) {
        if (!isset($_POST[$field])) {
            return false;
        }
    }
    
    $name = $_POST['name'];
    $image = $_POST['image'];
    $min_age = $_POST['min_age'];
    
    $result = addProfile($name, $image, $min_age);
    
    if ($result!=0) {
        return "Profile added successfully.";
    } else {
        return "Failed to add profile.";
    }
}