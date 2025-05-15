import { Funciones } from './menu.js';


const funciones = new Funciones();


document.addEventListener('DOMContentLoaded', () => {
    funciones.leftmenu();
    funciones.uppermenu();
    funciones.navbar();
    funciones.homevideos();

    // Cargar videos
    const videosContainer = document.getElementById('videos-container');
    if (videosContainer) {
        fetch("src/videos.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
                }
                return response.json();
            })
            .then(videos => {
                const videoCard = funciones.loadVideos(videos);
                videosContainer.innerHTML = videoCard;
            })
            .catch(error => console.error('Error al cargar los videos:', error));
    } else {
        console.warn('El contenedor de videos no se encontró en el DOM.');
    }
});