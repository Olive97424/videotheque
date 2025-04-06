import csv
import os
import unicodedata

csv_path = 'films.csv'
output_csv = 'films_corrige.csv'
image_folder = 'images'

# Fonction de normalisation
def normaliser_nom(nom):
    nom = nom.lower().replace(" ", "_")
    nom = unicodedata.normalize('NFD', nom).encode('ascii', 'ignore').decode('utf-8')
    return nom

# Indexer tous les fichiers du dossier images
fichiers_images = {
    normaliser_nom(f): f for f in os.listdir(image_folder)
    if os.path.isfile(os.path.join(image_folder, f))
}

# Lecture + détection colonne image
with open(csv_path, newline='', encoding='utf-8-sig') as infile:
    reader = csv.DictReader(infile, delimiter=';')
    fieldnames = reader.fieldnames

    # Détecter la colonne image automatiquement
    colonne_image = None
    for col in fieldnames:
        for row in reader:
            if ".jpg" in row[col].lower() or ".png" in row[col].lower():
                colonne_image = col
                break
        infile.seek(0)
        reader = csv.DictReader(infile, delimiter=';')
        if colonne_image:
            break

    if not colonne_image:
        print("❌ Impossible de détecter automatiquement la colonne contenant les noms d’images.")
        exit(1)

    print(f"📸 Colonne image détectée : {colonne_image}")

    # Réécriture du fichier
    with open(output_csv, 'w', newline='', encoding='utf-8') as outfile:
        writer = csv.DictWriter(outfile, fieldnames=fieldnames, delimiter=';')
        writer.writeheader()

        lignes = 0
        corriges = 0

        for row in reader:
            lignes += 1
            chemin_original = row[colonne_image].strip()
            nom_nettoye = normaliser_nom(os.path.basename(chemin_original))

            if nom_nettoye in fichiers_images:
                row[colonne_image] = os.path.join(image_folder, fichiers_images[nom_nettoye])
                corriges += 1
            else:
                print(f"❌ Introuvable : {chemin_original}")

            writer.writerow(row)

print(f"\n✅ Fichier généré : {output_csv}")
print(f"🔁 Chemins image corrigés : {corriges} / {lignes}")
