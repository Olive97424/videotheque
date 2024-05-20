// Fonction pour créer un élément de film
function createFilmElement(film, isSearchResult = false) {
    const filmDiv = document.createElement('div');

    // Assurez-vous que film.sections est défini et est un tableau
    const sections = film.sections ? film.sections.join(' ') : '';
    filmDiv.className = `film ${isSearchResult ? 'search-result' : sections}`;

    if (film.sections && film.sections.length > 1) {
        filmDiv.classList.add('multiple-sections');
    }

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

// Fonction pour filtrer les films par section
function filterFilmsBySection(section) {
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach(film => {
        if (film.sections && film.sections.includes(section)) {
            gallery.appendChild(createFilmElement(film));
        }
    });
    updateFilmCount();
}

// Fonction pour filtrer les films par titre ou acteur
function filterFilms() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach(film => {
        const titre = film.titre.toLowerCase().replace(/_/g, ' ');
        const acteurs = film.acteurs.toLowerCase();
        if (titre.includes(searchInput) || acteurs.includes(searchInput)) {
            gallery.appendChild(createFilmElement(film, true));
        }
    });
    updateFilmCount();
}

// Fonction pour ouvrir la modal de vidéo
function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    const videoId = videoUrl.split('v=')[1]?.split('&')[0] ?? videoUrl.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    videoFrame.src = embedUrl;
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}

// Fonction pour fermer la modal de vidéo
function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    modal.style.display = "none";
    videoFrame.src = "";
    document.body.classList.remove('modal-open');
}

// Fonction pour trier les films par titre
function sortFilmsByTitle() {
    films.sort((a, b) => a.titre.localeCompare(b.titre));
    populateFilms();
}

// Fonction pour filtrer les films par genre
function filterFilmsByGenre() {
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach((film, index) => {
        if (selectedGenre === '' || film.genres.map(g => g.toLowerCase()).includes(selectedGenre)) {
            const filmElement = createFilmElement(film, true);
            gallery.appendChild(filmElement);
            setTimeout(() => {
                filmElement.classList.add('show');
            }, 100 * index);
        }
    });
    updateFilmCount();
}

// Fonction pour détecter et supprimer les genres inutilisés
function updateGenres() {
    const genreSet = new Set();
    films.forEach(film => {
        film.genres.forEach(genre => {
            genreSet.add(genre);
        });
    });

    const genreSelect = document.getElementById('genreSelect');
    genreSelect.innerHTML = '<option value="">Tous les genres</option>'; // Réinitialiser le sélecteur des genres
    genreSet.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.toLowerCase();
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

// Fonction pour ajouter un film et mettre à jour les genres
function addFilm(newFilm) {
    films.push(newFilm);
    populateFilms();
    updateGenres(); // Mettre à jour les genres après l'ajout d'un film
}

// Fonction pour supprimer un film et mettre à jour les genres
function deleteFilm(filmTitle) {
    const filmIndex = films.findIndex(film => film.titre === filmTitle);
    if (filmIndex > -1) {
        films.splice(filmIndex, 1);
        populateFilms();
        updateGenres(); // Mettre à jour les genres après la suppression d'un film
    }
}

// Fonction pour peupler les genres
function populateGenres() {
    updateGenres(); // Appeler la fonction mise à jour des genres
}

// Fonction pour mettre à jour le nombre de films
function updateFilmCount() {
    const count = document.getElementById('filmGallery').childElementCount;
    document.getElementById('filmCount').textContent = `Nombre de films : ${count}`;
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
    displayCarousel(films);
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

// Fonction pour afficher les films dans le carrousel
function displayCarousel(films) {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // Modifier ce nombre pour afficher plus ou moins de films dans le carrousel
    const nouveautes = films.filter(film => film.nouveaute.toLowerCase() === 'oui').slice(0, 10);

    nouveautes.forEach((film, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
        carouselItem.innerHTML = `
            <img class="d-block w-100" src="${film.image}" alt="${film.titre}" data-video="${film.video}">
        `;
        carouselInner.appendChild(carouselItem);

        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#carouselExampleIndicators');
        indicator.setAttribute('data-slide-to', index);
        if (index === 0) {
            indicator.className = 'active';
        }
        carouselIndicators.appendChild(indicator);
    });

    // Ajouter des écouteurs d'événements aux images du carrousel
    const carouselImages = document.querySelectorAll('.carousel-inner img');
    carouselImages.forEach(img => {
        img.addEventListener('click', () => {
            const videoUrl = img.getAttribute('data-video');
            openModal(videoUrl);
        });
    });
}
