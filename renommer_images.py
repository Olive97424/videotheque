import os
import unicodedata

# Dossier des images
image_folder = 'images'

# Fonction pour nettoyer les noms
def nettoyer_nom_fichier(nom):
    nom = nom.lower()
    nom = nom.replace(" ", "_")
    nom = unicodedata.normalize('NFD', nom).encode('ascii', 'ignore').decode('utf-8')
    return nom

# Renommage des fichiers
for filename in os.listdir(image_folder):
    ancien_chemin = os.path.join(image_folder, filename)

    if os.path.isfile(ancien_chemin):
        nouveau_nom = nettoyer_nom_fichier(filename)
        nouveau_chemin = os.path.join(image_folder, nouveau_nom)

        if ancien_chemin != nouveau_chemin:
            if os.path.exists(nouveau_chemin):
                print(f"⚠️  Skipped: {filename} → {nouveau_nom} (déjà présent)")
            else:
                print(f"Renommage : {filename} → {nouveau_nom}")
                os.rename(ancien_chemin, nouveau_chemin)

print("✅ Tous les fichiers ont été traités.")
