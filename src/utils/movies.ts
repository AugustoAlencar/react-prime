// gerar uma lista de filmes com o tamanho que desejar

export function getListMovies(size: number, movies: Array<any>) {
    let popularMovies = []

    for (let i = 0; i < size; i++) {
        popularMovies.push(movies[i]);
    }

    return popularMovies;
}

// gerar um numero aletorio com base no tamanho da lista de filmes
export function randomBanner(movies: Array<any>): number {
    return Math.floor(Math.random() * movies.length)
}