function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';

    const anchor = document.createElement('a');
    anchor.href = film.video;
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre.replace(/_/g, ' ');
    img.onload = () => img.classList.add('loaded');

    const caption = document.createElement('div');
    caption.textContent = film.titre.replace(/_/g, ' ');

    anchor.appendChild(img);
    filmDiv.appendChild(anchor);
    filmDiv.appendChild(caption);

    setTimeout(() => filmDiv.classList.add('show'), 100); // Add 'show' class for animation delay

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
    films.forEach((film, index) => {
        if (!film.genres.length && selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre)) {
            const filmElement = createFilmElement(film);
            gallery.appendChild(filmElement);
            setTimeout(() => {
                filmElement.classList.add('show');
            }, 100 * index);
        }
    });
}

function populateGenres() {
    const genreSet = new Set();  // Use a Set to avoid duplicates
    films.forEach(film => {
        film.genres.forEach(genre => {
            genreSet.add(genre);
        });
    });
    const genreSelect = document.getElementById('genreSelect');
    genreSet.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.toLowerCase();
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

window.onload = () => {
    populateFilms();
    populateGenres();
};
