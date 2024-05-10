import csv

# Chemin vers le fichier CSV (assurez-vous de mettre à jour ce chemin si nécessaire)
csv_file_path = 'C:/Users/odefaudlegros/Documents/films papa//videotheque/films.csv'

# Dossier contenant les images (à ajuster si besoin)
images_folder = 'C:/Users/odefaudlegros/Documents/films papa/videotheque/images/'
title_column = 'nom films'  # Remplacez par le nom exact
video_column = 'liens vidéo'  # Remplacez par le nom exact
image_column = 'chemin accès'  # Remplacez par le nom exact


# Créer le contenu du fichier JavaScript
films_js = "const films = [\n"

try:
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')  # Modifier le délimiteur si nécessaire
        for row in reader:
            title = row[title_column]
            video_link = row[video_column]
            image_path = row[image_column]
            # Utiliser seulement le nom du fichier d'image, sans le chemin absolu
            image_file = image_path.split('\\')[-1]
            films_js += f"    {{ titre: \"{title}\", video: \"{video_link}\", image: \"{image_file}\" }},\n"

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
