import csv
import json
import os
import unicodedata

csv_file_path = 'films_corrige.csv'
json_file_path = 'films.js'
images_folder_relative = 'images/'

def nettoyer_texte(texte):
    texte = texte.replace('"', '\\"')
    texte = unicodedata.normalize('NFD', texte).encode('ascii', 'ignore').decode('utf-8')
    return texte.strip()

films = []
extensions_images = ['.jpg', '.jpeg', '.png', '.webp']

with open(csv_file_path, newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    print("🔍 Colonnes détectées :", reader.fieldnames)

    for row in reader:
        # Trouve automatiquement la colonne contenant une image valide
        image_column_name = next(
            (col for col in row if any(ext in row[col].lower() for ext in extensions_images)),
            None
        )

        if not image_column_name:
            print(f"❌ Aucune colonne image détectée pour la ligne : {row}")
            continue

        titre = nettoyer_texte(row.get('nom films', ''))
        video = row.get('liens video', '').strip()

        image_path = row[image_column_name].replace('\\', '/').strip()
        image_file = os.path.basename(image_path)
        image_web_path = f"{images_folder_relative}{image_file}"

        acteurs = nettoyer_texte(row.get('acteurs', ''))
        genres = [g.strip() for g in row.get('genre', '').split(',') if g.strip()]
        date_sortie = row.get('date_sortie', '').strip()
        sections = [s.strip() for s in row.get('section', '').split(',') if s.strip()]
        nouveaute = row.get('nouveaute', '').strip()
        synopsis = nettoyer_texte(row.get('synopsis', ''))
        restriction = row.get('restriction', '').strip()

        film = {
            "titre": titre,
            "video": video,
            "image": image_web_path,
            "acteurs": acteurs,
            "genres": genres,
            "date_sortie": date_sortie,
            "sections": sections,
            "nouveaute": nouveaute,
            "synopsis": synopsis,
            "restriction": restriction
        }

        films.append(film)

with open(json_file_path, 'w', encoding='utf-8') as jsfile:
    jsfile.write("const films = ")
    jsfile.write(json.dumps(films, ensure_ascii=False, indent=2))
    jsfile.write(";")

print(f"\n✅ Fichier '{json_file_path}' généré avec succès ! ({len(films)} films)")
