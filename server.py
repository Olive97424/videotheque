from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

@app.route('/add-film', methods=['POST'])
def add_film():
    film = request.json
    try:
        with open('films.csv', mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow([film['titre'], film['video'], film['image'], film['acteurs'], ','.join(film['genres']), film['date_sortie'], ','.join(film['sections']), film['nouveaute']])
        return jsonify(success=True)
    except Exception as e:
        return jsonify(success=False, error=str(e))

if __name__ == '__main__':
    app.run(debug=True)
