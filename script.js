
function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film');

    // Corriger sections même si mal encodé dans films.js (ex: "bluray, enfant")
    let sections = film.sections || [];
    if (typeof sections === 'string') {
        sections = sections.split(',').map(s => s.trim());
    }
    sections.forEach(section => {
        if (section && !section.includes(' ')) {
            filmDiv.classList.add(section);
        }
    });
    if (sections.length > 1) filmDiv.classList.add('multiple-sections');

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.titre.replace(/_/g, ' ');
    img.loading = 'lazy';

    const caption = document.createElement('div');
    caption.textContent = film.titre.replace(/_/g, ' ');

    const hoverDiv = document.createElement('div');
    hoverDiv.classList.add('info-hover');
    hoverDiv.innerHTML = `
        <strong>${film.titre}</strong><br>
        ${film.annee ? '📅 ' + film.annee + ' – ' : ''}${film.duree ? '🕒 ' + film.duree + '<br>' : ''}
        ${film.genres?.length ? '🧬 ' + film.genres.join(', ') + '<br>' : ''}
        ${film.resume ? '✏️ ' + film.resume : ''}
    `;

    filmDiv.appendChild(img);
    filmDiv.appendChild(caption);
    filmDiv.appendChild(hoverDiv);
    filmDiv.onclick = () => openModal(film.video);

    return filmDiv;
}

function populateFilms() {
    const gallery = document.getElementById('filmGallery');
    gallery.innerHTML = '';
    films.forEach((film) => {
        const filmElement = createFilmElement(film);
        gallery.appendChild(filmElement);
    });
    updateFilmCount();
}

function updateFilmCount() {
    const count = document.getElementById('filmGallery').childElementCount;
    document.getElementById('filmCount').textContent = `Nombre de films : ${count}`;
}

function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const videoId = videoUrl.includes('youtube')
        ? videoUrl.split('v=')[1]?.split('&')[0]
        : videoUrl.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoFrame.src = embedUrl;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.classList.remove('show');
}

window.onload = populateFilms;
