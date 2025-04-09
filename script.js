// Fonction pour créer un élément de film
function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film');

    // Toujours transformer sections en tableau utilisable
    const sections = Array.isArray(film.sections)
        ? film.sections
        : typeof film.sections === 'string' && film.sections !== ''
        ? [film.sections]
        : [];

    // Ajouter les classes de section (bluray, dvd, enfant)
    sections.forEach(section => {
        filmDiv.classList.add(section);
    });

    // Classe spéciale pour les films avec plusieurs sections
    if (sections.length > 1) {
        filmDiv.classList.add('multiple-sections');
    }

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre.replace(/_/g, ' ');
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');

    const caption = document.createElement('div');
    caption.textContent = film.titre.replace(/_/g, ' ');

    // Badge NOUVEAU si applicable
    if (film.nouveaute && film.nouveaute.toLowerCase() === "oui") {
        const badge = document.createElement('span');
        badge.textContent = 'NOUVEAU';
        badge.classList.add('badge-nouveau');
        filmDiv.appendChild(badge);
    }

   filmDiv.appendChild(img);
filmDiv.appendChild(caption);

const infoBtn = document.createElement('span');
infoBtn.classList.add('info-bulle');
infoBtn.textContent = 'ℹ️';

infoBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si une bulle est déjà affichée pour ce film, on la supprime
    const existing = document.querySelector('.popover-info');
    if (existing && existing.dataset.source === film.titre) {
        existing.remove();
        return;
    }

    // Supprimer les autres bulles ouvertes
    document.querySelectorAll('.popover-info').forEach(p => p.remove());

    // Créer la nouvelle bulle
    const popover = document.createElement('div');
    popover.classList.add('popover-info');
    popover.dataset.source = film.titre; // pour savoir qui l'a déclenchée
    popover.innerHTML = `

        <div style="text-align: right;">
        <button class="close-popover" style="background: transparent; border: none; color: white; font-size: 1.2em; cursor: pointer;">✖</button>
        </div>
        <p><strong>${film.titre.replace(/_/g, ' ')}</strong></p>
        <p><strong>Restriction :</strong> ${film.restriction || 'Aucune'}</p>
        <p><strong>Acteurs :</strong> ${film.acteurs}</p>
        <p><strong>Année :</strong> ${film.date_sortie}</p>
	<p><strong>Durée :</strong> ${film.duree || 'Non spécifiée'}</p>
        <p><strong>Genres :</strong> ${film.genres.join(', ')}</p>
        <p><strong>Synopsis :</strong><br>${film.synopsis || 'Pas de synopsis'}</p>
    	
    `;
    document.body.appendChild(popover);

popover.querySelector('.close-popover').addEventListener('click', () => {
    popover.remove();
});


    const rect = infoBtn.getBoundingClientRect();
const popoverWidth = 300; // largeur estimée de la bulle
const popoverHeight = 250; // hauteur approximative
const padding = 10;

let left = rect.right + window.scrollX + padding; // ouverture à droite par défaut
let top = rect.top + window.scrollY - popoverHeight / 2;
const screenMiddle = window.innerWidth / 2;
const iconCenter = rect.left + rect.width / 2;

if (iconCenter > screenMiddle - 50 && iconCenter < screenMiddle + 50) {
    left = screenMiddle - popoverWidth / 2 + window.scrollX;
} else if (rect.right + popoverWidth + padding > window.innerWidth) {
    left = rect.left + window.scrollX - popoverWidth - padding;
}



// S'assurer que la bulle reste dans la fenêtre verticalement
if (top < window.scrollY + padding) {
    top = window.scrollY + padding;
} else if (top + popoverHeight > window.scrollY + window.innerHeight) {
    top = window.scrollY + window.innerHeight - popoverHeight - padding;
}

popover.style.position = 'absolute';
popover.style.left = `${left}px`;
popover.style.top = `${top}px`;
popover.style.maxWidth = `${popoverWidth}px`;
popover.style.zIndex = '1000';


    // Fermer si on clique ailleurs
    const closePopover = (event) => {
        if (!popover.contains(event.target) && event.target !== infoBtn) {
            popover.remove();
            document.removeEventListener('click', closePopover);
        }
    };
    setTimeout(() => {
        document.addEventListener('click', closePopover);
    }, 10);
});

filmDiv.appendChild(infoBtn);

filmDiv.addEventListener('click', (e) => {
    // Ne pas ouvrir la vidéo si le clic vient du bouton info
    if (e.target.classList.contains('info-bulle')) return;
    openModal(film.video);
});

setTimeout(() => filmDiv.classList.add('show'), 100);

return filmDiv;


}

// Le reste du fichier reste inchangé

function updateFilmCount() {
    const count = document.getElementById('filmGallery').childElementCount;
    document.getElementById('filmCount').textContent = `Nombre de films : ${count}`;
}

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

function filterFilms() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';

    films.forEach(film => {
        const titre = film.titre.toLowerCase().replace(/_/g, ' ');
        const acteurs = film.acteurs.toLowerCase();
               const isNouveau = film.nouveaute && film.nouveaute.toLowerCase() === "oui";

        if (
            titre.includes(searchInput) ||
            acteurs.includes(searchInput) ||
            (isNouveau && "nouveau".includes(searchInput))
        ) {
            gallery.appendChild(createFilmElement(film));
        }


    });
    updateFilmCount();
}

function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    const videoId = videoUrl.split('v=')[1]?.split('&')[0] ?? videoUrl.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&showinfo=0&rel=0&controls=1`;


    videoFrame.src = embedUrl;
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    modal.style.display = "none";
    videoFrame.src = "";
    document.body.classList.remove('modal-open');
}

function sortFilmsByTitle() {
    films.sort((a, b) => a.titre.localeCompare(b.titre));
    populateFilms();
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
let filtreNouveauteActif = false;

function filterByNouveautes() {
    const gallery = document.getElementById('filmGallery');
    const button = document.querySelector('button[onclick="filterByNouveautes()"]');

    filtreNouveauteActif = !filtreNouveauteActif;

    gallery.innerHTML = '';

    if (filtreNouveauteActif) {
        films.forEach(film => {
            if (film.nouveaute && film.nouveaute.toLowerCase() === "oui") {
                gallery.appendChild(createFilmElement(film));
            }
        });
        button.classList.add('active');
        button.textContent = '🔁 Tous les films';
    } else {
        films.forEach(film => {
            gallery.appendChild(createFilmElement(film));
        });
        button.classList.remove('active');
        button.textContent = '🆕 Nouveautés';
    }

    updateFilmCount();
}
function updateGenres() {
    const genreSet = new Set();
    films.forEach(film => {
        film.genres.forEach(genre => {
            genreSet.add(genre);
        });
    });

    const genreSelect = document.getElementById('genreSelect');
    genreSelect.innerHTML = '<option value="">Tous les genres</option>';
    genreSet.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.toLowerCase();
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

function addFilm(newFilm) {
    films.push(newFilm);
    populateFilms();
    updateGenres();
}

function deleteFilm(filmTitle) {
    const filmIndex = films.findIndex(film => film.titre === filmTitle);
    if (filmIndex > -1) {
        films.splice(filmIndex, 1);
        populateFilms();
        updateGenres();
    }
}

function populateGenres() {
    updateGenres();
}

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

function displayCarousel(films) {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    const nouveautes = films.filter(film => film.nouveaute.toLowerCase() === 'oui').slice(0, 13);

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

    const carouselImages = document.querySelectorAll('.carousel-inner img');
    carouselImages.forEach(img => {
        img.addEventListener('click', () => {
            const videoUrl = img.getAttribute('data-video');
            openModal(videoUrl);
        });
    });
}