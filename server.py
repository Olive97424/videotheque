from flask_cors import CORS
from flask import Flask, request, jsonify
import csv
import subprocess
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app = Flask(__name__, static_url_path='', static_folder='.')
CORS(app)

from flask import send_from_directory

# Route pour servir les images depuis le dossier "images"
@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'images')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

CSV_FILE = 'films.csv'
SCRIPT_JS_GENERATOR = 'generer_js.py'

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/ajouter-film', methods=['POST'])
def ajouter_film():
    if 'image' not in request.files:
        return jsonify({"status": "error", "message": "Image manquante."}), 400

    image_file = request.files['image']
    if image_file.filename == '' or not allowed_file(image_file.filename):
        return jsonify({"status": "error", "message": "Fichier image non valide."}), 400

    filename = secure_filename(image_file.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    image_file.save(image_path)

    titre_auto = os.path.splitext(filename)[0]

    data = request.form
    titre = data.get('titre', '').strip() or titre_auto

    film_line = [
        titre,
        data.get('video', ''),
        image_path,
        data.get('acteurs', ''),
        data.get('genres', ''),
        data.get('date', ''),
        data.get('section', ''),
        data.get('nouveaute', ''),
        data.get('synopsis', ''),
        data.get('restriction', '')
    ]

    try:
        with open(CSV_FILE, 'a', newline='', encoding='utf-8-sig') as csvfile:
            writer = csv.writer(csvfile, delimiter=';')
            writer.writerow(film_line)

        subprocess.run(['python', SCRIPT_JS_GENERATOR], check=True)

        return jsonify({"status": "ok", "message": "Film ajouté avec image !"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
from flask import send_from_directory

@app.route('/')
@app.route('/index.html')
def index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
