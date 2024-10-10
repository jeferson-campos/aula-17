const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlYzgyODNmYjFkM2JkNjgyMzFiZTAxMzAxMjIyNCIsIm5iZiI6MTcyNzk2MTkxMS40ODIwMzcsInN1YiI6IjY2MmQ0MWZkNWE3ODg0MDEyNGMxNjc3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uUHvxwtDhC8TEFnVY9UBniYIGVRSZcUF6XTmyUI9NiU';
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';

async function buscarFilmes() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': Bearer ${apiKey},
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const data = await response.json();
        mostrarFilmes(data.results);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

function mostrarFilmes(filmes) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Limpa o conteúdo existente
    filmes.forEach(filme => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}">
            <h3>${filme.title}</h3>
            <p>Lançamento: ${filme.release_date}</p>
        `;
        movieList.appendChild(movieItem);
    });
}

buscarFilmes();