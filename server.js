const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/saveFilm', (req, res) => {
    const film = req.body;
    const csvLine = `"${film.titre}";"${film.video}";"${film.image}";"${film.acteurs}";"${film.genres}";"${film.date_sortie}";"${film.sections}";"${film.nouveaute}"\n`;
    fs.appendFile(path.join(__dirname, 'films.csv'), csvLine, (err) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du film:', err);
            res.status(500).json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
