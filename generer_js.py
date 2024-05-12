import csv

# Chemin vers le fichier CSV
csv_file_path = 'C:/Users/odefaudlegros/Documents/films papa/videotheque/films.csv'

# Chemin absolu local vers le dossier d'images, mais relatif dans `films.js`
images_folder_absolute = 'C:/Users/odefaudlegros/Documents/films papa/videotheque/images/'
images_folder_relative = 'images/'  # Pour GitHub Pages

# Noms des colonnes dans le fichier CSV
title_column = 'nom films'
video_column = 'liens vidéo'
image_column = 'chemin accès'
actors_column = 'acteurs'  # Assurez-vous que cette colonne existe dans votre CSV
genre_column = 'genre'     # Assurez-vous que cette colonne existe dans votre CSV

# Créer le contenu du fichier JavaScript
films_js = "const films = [\n"

try:
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            title = row[title_column]
            video_link = row[video_column]
            image_path = row[image_column]
            actors = row[actors_column]
            genre = row[genre_column]

            # Extraire seulement le nom du fichier d'image
            image_file = image_path.split('\\')[-1]

            # Ajouter le chemin relatif pour les images dans `films.js`
            films_js += f"    {{ titre: \"{title}\", video: \"{video_link}\", image: \"{images_folder_relative}{image_file}\", acteurs: \"{actors}\", genre: \"{genre}\" }},\n"

    # Supprimer la dernière virgule et terminer le tableau JavaScript
    films_js = films_js.rstrip(",\n") + "\n];"

    # Sauvegarder le fichier JavaScript généré
    with open('films.js', 'w', encoding='utf-8') as jsfile:
        jsfile.write(films_js)

    print("Le fichier 'films.js' a été généré avec succès.")

except FileNotFoundError:
    print(f"Le fichier {csv_file_path} n'a pas été trouvé.")
except KeyError as e:
    print(f"La colonne '{e.args[0]}' est introuvable dans le fichier CSV.")
except Exception as e:
    print(f"Une erreur inattendue est survenue : {e}")
