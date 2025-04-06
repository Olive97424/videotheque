import csv
import os

csv_path = 'films.csv'
image_folder = 'images'
image_column = 'chemin accès'  # nom exact de la colonne dans le CSV

# Lister les fichiers réels dans le dossier images
images_disponibles = set(f.lower() for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f)))

# Lecture du CSV
with open(csv_path, newline='', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f, delimiter=';')
    erreurs = []
    total = 0

    for row in reader:
        chemin_image = row.get(image_column, '').strip()
        nom_fichier = os.path.basename(chemin_image).lower()
        total += 1

        if nom_fichier in images_disponibles:
            print(f"✅ OK : {nom_fichier}")
        else:
            erreurs.append(nom_fichier)

# Résumé
print("\n🔍 Résumé des images manquantes :")
if erreurs:
    for err in erreurs:
        print(f"❌ Manquante ou mal nommée : {err}")
    print(f"\n❗️ {len(erreurs)} images manquantes sur {total} films")
else:
    print("🎉 Toutes les images référencées dans le CSV sont bien présentes dans le dossier.")
