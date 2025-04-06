import csv
import os

# Chemin vers le fichier CSV
csv_file_path = 'films.csv'  # À adapter si nécessaire

# Chemin relatif pour les images dans le site
images_folder_relative = 'images/'

# Colonnes utilisées
columns = {
    'title': 'nom films',
    'video': 'liens vidéo',
    'image': 'chemin accès',
    'actors': 'acteurs',
    'genres': 'genre',
    'release_date': 'date_sortie',
    'sections': 'section',
    'nouveaute': 'nouveaute',
    'synopsis': 'synopsis',
    'restriction': 'restriction'
}

# Génération du contenu JS
films_js = "const films = [\n"

try:
    with open(csv_file_path, newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            title = row.get(columns['title'], '').strip()
            video = row.get(columns['video'], '').strip()
            image_path = row.get(columns['image'], '').strip()
            image_file = os.path.basename(image_path)
            image_web_path = f"{images_folder_relative}{image_file}"

            actors = row.get(columns['actors'], '').strip()
            genres = [g.strip() for g in row.get(columns['genres'], '').split(',') if g.strip()]
            sections = [s.strip() for s in row.get(columns['sections'], '').split(',') if s.strip()]
            date_sortie = row.get(columns['release_date'], '').strip()
            nouveaute = row.get(columns['nouveaute'], '').strip()
            synopsis = row.get(columns['synopsis'], '').strip()
            restriction = row.get(columns['restriction'], '').strip()

            # Marquer comme nouveauté si date >= 2024
            if not nouveaute and date_sortie.isdigit() and int(date_sortie) >= 2024:
                nouveaute = "oui"

            genre_list = ', '.join(f'"{g}"' for g in genres)
            section_list = ', '.join(f'"{s}"' for s in sections)

            films_js += f"    {{ titre: \"{title}\", video: \"{video}\", image: \"{image_web_path}\", acteurs: \"{actors}\", genres: [{genre_list}], date_sortie: \"{date_sortie}\", sections: [{section_list}], nouveaute: \"{nouveaute}\", synopsis: \"{synopsis}\", restriction: \"{restriction}\" }},\n"

    films_js = films_js.rstrip(',\n') + "\n];"

    with open('films.js', 'w', encoding='utf-8') as jsfile:
        jsfile.write(films_js)

    print("✅ Fichier 'films.js' généré avec succès !")

except FileNotFoundError:
    print("❌ Le fichier CSV est introuvable.")
except Exception as e:
    print(f"❌ Erreur inattendue : {e}")
