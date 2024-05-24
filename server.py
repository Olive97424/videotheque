from flask import Flask, request, jsonify
import csv
import os
import subprocess

app = Flask(__name__)

@app.route('/add-film', methods=['POST'])
def add_film():
    film = request.json
    print(f"Received film: {film}")  # Pour déboguer
    try:
        csv_file_path = 'C:/Users/odefaudlegros/Documents/films papa/videotheque/films.csv'
        with open(csv_file_path, mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file, delimiter=';')
            writer.writerow([
                film['titre'], 
                film['video'], 
                film['image'], 
                film['acteurs'], 
                ','.join(film['genres']), 
                film['date_sortie'], 
                ','.join(film['sections']), 
                film['nouveaute']
            ])

        # Exécuter le script generer_js.py après avoir mis à jour le CSV
        subprocess.run(['python', 'generer_js.py'])

        return jsonify(success=True)
    except Exception as e:
        print(f"Error: {e}")  # Pour déboguer
        return jsonify(success=False, error=str(e))

if __name__ == '__main__':
    app.run(debug=True)
