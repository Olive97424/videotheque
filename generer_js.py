import csv
import json
import os
import unicodedata

def normalize_filename(name):
    """Nettoie et transforme un titre en nom de fichier d'image"""
    name = unicodedata.normalize('NFKD', name)
    name = name.encode('ascii', 'ignore').decode('utf-8')
    name = name.lower().strip().replace(" ", "_")
    return f"{name}.jpg"

films = []
image_folder = "images"

with open('films.csv', newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    for row in reader:
        titre = row["nom films"].strip()
        image_name = normalize_filename(titre)
        image_path = f"{image_folder}/{image_name}"

        # Vérifie si le fichier image existe
        if not os.path.isfile(image_path):
            print(f"⚠️ Image manquante : {image_path}")

        film = {
            "titre": titre,
            "video": row["liens vidéo"].strip(),
            "image": image_path,
            "acteurs": row.get("acteurs", "").strip(),
            "genres": [g.strip() for g in row.get("genre", "").split(",") if g.strip()],
            "annee": row.get("annee", "").strip(),
            "duree": row.get("duree", "").strip(),
            "resume": row.get("resume", "").strip(),
            "sections": [row.get("section", "").strip()],
            "nouveaute": row.get("nouveaute", "").strip()
        }
        films.append(film)

# Sauvegarde dans films.js
with open('films.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write("const films = ")
    json.dump(films, jsfile, indent=4, ensure_ascii=False)
    jsfile.write(";")
