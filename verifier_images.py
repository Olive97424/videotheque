
import os
import json

# Change si besoin le chemin vers ton dossier "images"
image_folder = "images"
films_file = "films.js"

# Charger les données JSON depuis films.js
with open(films_file, 'r', encoding='utf-8') as f:
    content = f.read()
    content = content[content.find('['):]  # Trouve le début du tableau
    films = json.loads(content)

# Liste des images disponibles
available_images = set(os.listdir(image_folder))

# Vérifie les images manquantes
missing_images = []
for film in films:
    img_name = os.path.basename(film["image"])
    if img_name not in available_images:
        missing_images.append((film["titre"], img_name))

# Affiche le résultat
if missing_images:
    print("Images manquantes :")
    for titre, img in missing_images:
        print(f"- {titre} → {img}")
else:
    print("✅ Toutes les images sont présentes !")
