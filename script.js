// Fonction pour créer un élément de film
function createFilmElement(film, isSearchResult = false) {
    const filmDiv = document.createElement('div');
    filmDiv.className = `film ${isSearchResult ? 'search-result' : film.section}`;

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre.replace(/_/g, ' ');
    img.loading = 'lazy';
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

// Fonction pour ouvrir la modal de vidéo
function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    const videoId = videoUrl.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    videoFrame.src = embedUrl;
    modal.style.display = "block";
    document.body.classList.add('modal-open');  // Ajouter la classe modal-open
}

// Fonction pour fermer la modal de vidéo
function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    modal.style.display = "none";
    videoFrame.src = "";
    document.body.classList.remove('modal-open');  // Supprimer la classe modal-open
}

// Fonction pour peupler la galerie de films
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

// Fonction pour filtrer les films par recherche
function filterFilms() {
    const searchTerm = document.getElementById('search').value.toLowerCase().replace(/_/g, ' ');
    const searchActor = document.getElementById('searchActor').value.toLowerCase();
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();

    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    let hasResults = false;
    films.forEach(film => {
        const matchTitle = film.titre.toLowerCase().replace(/_/g, ' ').includes(searchTerm);
        const matchActor = film.acteurs.toLowerCase().includes(searchActor);
        const matchGenre = selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre);

        if (matchTitle && matchActor && matchGenre) {
            gallery.appendChild(createFilmElement(film, true));
            hasResults = true;
        }
    });
    
    // Masquer les suggestions après la recherche
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    suggestionsDiv.style.display = 'none';

    updateFilmCount();
}

// Fonction pour filtrer les films par acteur
function filterFilmsByActor() {
    const searchTerm = document.getElementById('searchActor').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    let hasResults = false;
    films.forEach(film => {
        if (film.acteurs.toLowerCase().includes(searchTerm)) {
            gallery.appendChild(createFilmElement(film, true));
            hasResults = true;
        }
    });
    
    // Masquer les suggestions après la recherche
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    suggestionsDiv.style.display = 'none';

    updateFilmCount();
}

// Fonction pour filtrer les films par genre
function filterFilmsByGenre() {
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    let hasResults = false;
    films.forEach((film, index) => {
        if (selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre)) {
            const filmElement = createFilmElement(film, true);
            gallery.appendChild(filmElement);
            setTimeout(() => {
                filmElement.classList.add('show');
            }, 100 * index);
            hasResults = true;
        }
    });
    
    // Masquer les suggestions après la recherche
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    suggestionsDiv.style.display = 'none';

    updateFilmCount();
}

// Fonction pour filtrer les films par section
function filterFilmsBySection(section) {
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach(film => {
        if (film.section === section) {
            gallery.appendChild(createFilmElement(film));
        }
    });
    updateFilmCount();
}

// Fonction pour trier les films par titre
function sortFilmsByTitle() {
    films.sort((a, b) => a.titre.localeCompare(b.titre));
    populateFilms();
}

// Fonction pour trier les films par date de sortie
function sortFilmsByDate() {
    films.sort((a, b) => new Date(b.date_sortie) - new Date(a.date_sortie));
    populateFilms();
}

// Fonction pour peupler les genres
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

// Fonction pour mettre à jour le nombre de films
function updateFilmCount() {
    const count = document.getElementById('filmGallery').childElementCount;
    document.getElementById('filmCount').textContent = `Nombre de films : ${count}`;
}

// Fonction pour afficher les suggestions de recherche en temps réel
function showSuggestions() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    if (searchTerm.length > 2) {
        const suggestions = films.filter(film => film.titre.toLowerCase().includes(searchTerm));
        if (suggestions.length > 0) {
            suggestions.forEach(film => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = film.titre.replace(/_/g, ' ');
                suggestionItem.onclick = () => {
                    document.getElementById('search').value = film.titre.replace(/_/g, ' ');
                    filterFilms();
                    suggestionsDiv.innerHTML = '';
                    suggestionsDiv.style.display = 'none';
                };
                suggestionsDiv.appendChild(suggestionItem);
            });
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// Fonction pour basculer le thème
function toggleTheme() {
    const body = document.body;
    const checkbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Initialisation à la charge de la page
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.getElementById('checkbox').checked = (savedTheme === 'light');
    }
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
