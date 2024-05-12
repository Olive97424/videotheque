import csv

# Chemin vers le fichier CSV
csv_file_path = 'C:/Users/odefaudlegros/Documents/films papa/videotheque/films.csv'

# Chemin relatif pour les images dans `films.js`
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
            actors = row.get(actors_column, '')
            genres = row.get(genre_column, '').split(',') if row.get(genre_column) else []

            image_file = image_path.split('\\')[-1]
            image_relative_path = f"{images_folder_relative}{image_file}"
            genre_list = ", ".join(f'"{genre.strip()}"' for genre in genres)

            films_js += f"    {{ titre: \"{title}\", video: \"{video_link}\", image: \"{image_relative_path}\", acteurs: \"{actors}\", genres: [{genre_list}] }},\n"

    films_js = films_js.rstrip(",\n") + "\n];"

    # Sauvegarder le fichier JavaScript généré
    with open('films.js', 'w', encoding='utf-8') as jsfile:
        jsfile.write(films_js)

    print("Le fichier 'films.js' a été généré avec succès.")

except FileNotFoundError:
    print("Le fichier CSV n'a pas été trouvé.")
except KeyError as e:
    print(f"Erreur de clé : {e}")
except Exception as e:
    print(f"Erreur inattendue : {e}")
