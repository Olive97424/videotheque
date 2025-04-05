
import csv
import json
import unicodedata

def normalize(key):
    return unicodedata.normalize('NFKD', key).encode('ascii', 'ignore').decode('utf-8').lower().strip()

films = []

with open('films.csv', newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    field_map = {normalize(h): h for h in reader.fieldnames}

    for row in reader:
        titre = row[field_map['nom films']].strip()
        film = {
            "titre": titre,
            "video": row[field_map['liens video']].strip(),
            "image": f"images/{titre.lower().replace(' ', '_')}.jpg",
            "acteurs": row.get(field_map.get("acteurs", ""), "").strip(),
            "genres": [g.strip() for g in row.get(field_map.get("genre", ""), "").split(",") if g.strip()],
            "annee": row.get(field_map.get("annee", ""), "").strip(),
            "duree": row.get(field_map.get("duree", ""), "").strip(),
            "resume": row.get(field_map.get("resume", ""), "").strip(),
            "sections": [row.get(field_map.get("section", ""), "").strip()],
            "nouveaute": row.get(field_map.get("nouveaute", ""), "").strip()
        }
        films.append(film)

with open('films.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write("const films = ")
    json.dump(films, jsfile, indent=4, ensure_ascii=False)
    jsfile.write(";")
