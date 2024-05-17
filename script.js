function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre.replace(/_/g, ' ');
    img.onload = () => img.classList.add('loaded');

    const caption = document.createElement('div');
    caption.textContent = film.titre.replace(/_/g, ' ');

    filmDiv.appendChild(img);
    filmDiv.appendChild(caption);

    filmDiv.onclick = () => {
        openModal(film.video);
    };

    setTimeout(() => filmDiv.classList.add('show'), 100);

    return filmDiv;
}

function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    const videoId = videoUrl.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    videoFrame.src = embedUrl;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    modal.style.display = "none";
    videoFrame.src = "";
}

window.onload = () => {
    populateFilms();
    populateGenres();
    updateFilmCount();

    const modal = document.getElementById('videoModal');
    const span = document.getElementsByClassName('close')[0];

    if (span) {
        span.onclick = () => closeModal();
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
};

function populateFilms() {
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = ''; 
    films.forEach((film, index) => {
        const filmElement = createFilmElement(film);
        gallery.appendChild(filmElement);
        setTimeout(() => {
            filmElement.classList.add('show');
        }, 100 * index);
    });
    updateFilmCount();
}

function filterFilms() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const searchActor = document.getElementById('searchActor').value.toLowerCase();
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();

    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach(film => {
        const matchTitle = film.titre.toLowerCase().includes(searchTerm);
        const matchActor = film.acteurs.toLowerCase().includes(searchActor);
        const matchGenre = selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre);

        if (matchTitle && matchActor && matchGenre) {
            gallery.appendChild(createFilmElement(film));
        }
    });
    updateFilmCount();
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
    updateFilmCount();
}

function filterFilmsByGenre() {
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';
    films.forEach((film, index) => {
        if (selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre)) {
            const filmElement = createFilmElement(film);
            gallery.appendChild(filmElement);
            setTimeout(() => {
                filmElement.classList.add('show');
            }, 100 * index);
        }
    });
    updateFilmCount();
}

function sortFilmsByTitle() {
    films.sort((a, b) => a.titre.localeCompare(b.titre));
    populateFilms();
}

function sortFilmsByDate() {
    films.sort((a, b) => new Date(a.date_sortie) - new Date(b.date_sortie));
    populateFilms();
}

function populateGenres() {
    const genreSet = new Set();
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

function updateFilmCount() {
    const count = document.getElementById('filmGallery').childElementCount;
    document.getElementById('filmCount').textContent = `Nombre de films : ${count}`;
}
