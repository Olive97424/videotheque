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
release_date_column = 'date_sortie'  # Nouvelle colonne pour la date de sortie
section_column = 'section'  # Nouvelle colonne pour la section
nouveaute_column = 'nouveaute'  # Nouvelle colonne pour nouveauté

# Créer le contenu du fichier JavaScript
films_js = "const films = [\n"

try:
    with open(csv_file_path, newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            title = row.get(title_column, '').strip()
            video_link = row.get(video_column, '').strip()
            image_path = row.get(image_column, '').strip()
            actors = row.get(actors_column, '').strip()
            genres = row.get(genre_column, '').strip().split(',') if row.get(genre_column) else []
            release_date = row.get(release_date_column, '').strip()
            sections = row.get(section_column, '').strip().split(',') if row.get(section_column) else []
            nouveaute = row.get(nouveaute_column, '').strip()

            if title and video_link and image_path:
                image_file = image_path.split('\\')[-1]
                image_relative_path = f"{images_folder_relative}{image_file}"
                genre_list = ", ".join(f'"{genre.strip()}"' for genre in genres)
                section_list = ", ".join(f'"{section.strip()}"' for section in sections)

                films_js += f"    {{ titre: \"{title}\", video: \"{video_link}\", image: \"{image_relative_path}\", acteurs: \"{actors}\", genres: [{genre_list}], date_sortie: \"{release_date}\", sections: [{section_list}], nouveaute: \"{nouveaute}\" }},\n"

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
