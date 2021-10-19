import axios from 'axios';

// URL Filmes em cartaz
// https://api.themoviedb.org/3/
// movie/now_playing
// ?api_key=992900e5c985f59b067152af50c82611
// &language=pt-BR
// &page=1

export const key = '992900e5c985f59b067152af50c82611'

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default API