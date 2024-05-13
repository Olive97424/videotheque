function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';

    const anchor = document.createElement('a');
    anchor.href = film.video;
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre;

    const caption = document.createElement('div');
    caption.textContent = film.titre;

    anchor.appendChild(img);
    filmDiv.appendChild(anchor);
    filmDiv.appendChild(caption);

    return filmDiv;
}

function populateFilms() {
    const gallery = document.getElementById('filmGallery');
    films.forEach(film => {
        gallery.appendChild(createFilmElement(film));
    });
}

function filterFilms() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';
    films.forEach(film => {
        if (film.titre.toLowerCase().includes(searchTerm)) {
            gallery.appendChild(createFilmElement(film));
        }
    });
}

function filterFilmsByActor() {
    const searchTerm = document.getElementById('searchActor').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';
    films.forEach(film => {
        if (film.acteurs.toLowerCase().includes(searchTerm)) {
            gallery.appendChild(createFilmElement(film));
        }
    });
}

function filterFilmsByGenre() {
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';
    films.forEach(film => {
        if (film.genres.map(g => g.toLowerCase()).includes(selectedGenre) || selectedGenre === '') {
            gallery.appendChild(createFilmElement(film));
        }
    });
}

window.onload = populateFilms;
